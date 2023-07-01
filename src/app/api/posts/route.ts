import {NextRequest, NextResponse} from 'next/server';
import connectDB from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), {status: 200});
  } catch (error) {
    return new NextResponse('Database error', {status: 500});
  }
};
