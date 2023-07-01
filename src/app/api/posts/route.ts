import {NextRequest, NextResponse} from 'next/server';
import connectDB from '@/utils/db';
import Post from '@/models/Post';
import {IPost} from '@/types/types';
import {FilterQuery} from 'mongoose';

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);

  const username = url.searchParams.get('username');
  try {
    await connectDB();
    const usernameFilter: FilterQuery<IPost> = username ? {username} : {};
    const posts = await Post.find(usernameFilter);
    return new NextResponse(JSON.stringify(posts), {status: 200});
  } catch (error) {
    return new NextResponse('Database error', {status: 500});
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connectDB();

    await newPost.save();

    return new NextResponse('Post has been created', {status: 201});
  } catch (err) {
    return new NextResponse('Database Error', {status: 500});
  }
};
