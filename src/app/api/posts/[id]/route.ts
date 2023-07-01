import {NextRequest, NextResponse} from 'next/server';
import connectDB from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (
  request: NextRequest,
  params: {params: {id: string}}
) => {
  try {
    const {
      params: {id},
    } = params;
    await connectDB();
    const post = await Post.findById(id);
    console.log({params, id, post});
    return new NextResponse(JSON.stringify(post), {status: 200});
  } catch (error) {
    return new NextResponse('Database error', {status: 500});
  }
};

export const DELETE = async (
  request: NextRequest,
  params: {params: {id: string}}
) => {
  const {
    params: {id},
  } = params;

  try {
    await connectDB();

    await Post.findByIdAndDelete(id);

    return new NextResponse('Post has been deleted', {status: 200});
  } catch (err) {
    return new NextResponse('Database Error', {status: 500});
  }
};
