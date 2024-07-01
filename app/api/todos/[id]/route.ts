import connectMongoDB from "../../../../libs/db";
import Topic from "../../../../models/todo";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description, completed, priority } = await request.json();
  await connectMongoDB();
  
  try {
    const existingTopic = await Topic.findById(id);
    if (!existingTopic) {
      return NextResponse.json({ message: "To Do not found" }, { status: 404 });
    }

    // Update data based on request
    existingTopic.title = title !== undefined ? title : existingTopic.title;
    existingTopic.description = description !== undefined ? description : existingTopic.description;
    existingTopic.completed = completed !== undefined ? completed : existingTopic.completed;
    existingTopic.priority = priority !== undefined ? priority : existingTopic.priority;

    await existingTopic.save();

    return NextResponse.json({ message: "To Do's updated", topic: existingTopic }, { status: 200 });
  } catch (error) {
    console.error("Error updating To Do: ", error);
    return NextResponse.json({ message: "Failed to update To Do" }, { status: 500 });
  }
}
