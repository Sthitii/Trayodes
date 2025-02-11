import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

// Create a new case study
export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data = await req.json();
    const slug = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
      const caseStudy = await prisma.caseStudy.create({
        data: {
          title: data.title,
          slug,
          clientName: data.clientName,
          industry: data.industry,
          challenge: data.challenge,
          solution: data.solution,
          results: data.results,
          featuredImage: data.featuredImage,
          serviceId: data.serviceId,
        },
        include: {
          service: {
            select: {
              title: true,
            },
          },
        },
      });
  
      return NextResponse.json(caseStudy);
    } catch (error) {
      console.error('Error creating case study:', error);
      return NextResponse.json(
        { error: 'Error creating case study' },
        { status: 500 }
      );
    }
  }
  
  // Get all case studies with filters
  export async function GET(req) {
    try {
      const { searchParams } = new URL(req.url);
      const page = parseInt(searchParams.get('page')) || 1;
      const limit = parseInt(searchParams.get('limit')) || 10;
      const industry = searchParams.get('industry');
      const search = searchParams.get('search');
  
      const where = {
        ...(industry && { industry }),
        ...(search && {
          OR: [
            { title: { contains: search, mode: 'insensitive' } },
            { clientName: { contains: search, mode: 'insensitive' } },
            { industry: { contains: search, mode: 'insensitive' } },
          ],
        }),
      };
  
      const [caseStudies, total] = await Promise.all([
        prisma.caseStudy.findMany({
          where,
          include: {
            service: {
              select: {
                title: true,
              },
            },
          },
          orderBy: { createdAt: 'desc' },
          skip: (page - 1) * limit,
          take: limit,
        }),
        prisma.caseStudy.count({ where }),
      ]);
  
      return NextResponse.json({
        caseStudies,
        total,
        pages: Math.ceil(total / limit),
      });
    } catch (error) {
      console.error('Error fetching case studies:', error);
      return NextResponse.json(
        { error: 'Error fetching case studies' },
        { status: 500 }
      );
    }
  }