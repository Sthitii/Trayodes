import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';

// Update a case study
export async function PUT(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    const caseStudy = await prisma.caseStudy.update({
      where: { id: params.id },
      data: {
        title: data.title,
        clientName: data.clientName,
        industry: data.industry,
        challenge: data.challenge,
        solution: data.solution,
        results: data.results,
        featuredImage: data.featuredImage,
        serviceId: data.serviceId,
      },
    });

    return NextResponse.json(caseStudy);
  } catch (error) {
    console.error('Error updating case study:', error);
    return NextResponse.json(
      { error: 'Error updating case study' },
      { status: 500 }
    );
  }
}

// Delete a case study
export async function DELETE(req, { params }) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await prisma.caseStudy.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting case study:', error);
    return NextResponse.json(
      { error: 'Error deleting case study' },
      { status: 500 }
    );
  }
}
