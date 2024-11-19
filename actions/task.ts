"use server"

import prisma from "@/lib/prisma";
import { createTaskSchemaType } from "@/schema/createTask";
import { currentUser } from "@clerk/nextjs/server";
import { error } from "console";

export async function createTask(data: createTaskSchemaType) {
    const user = await currentUser();

    if (!user) {
        throw new Error("User not found")
    }

    const { content, expiresAt, collectionId } = data;

    return await prisma.task.create({
        data: {
            userId: user.id,
            content,
            expiresAt,
            Collection: {
                connect: {
                    id: collectionId
                }
            }
        }
    })
}