import { CaseStudyEditor } from '@/components/case-studies/CaseStudyEditor';
import { prisma } from '@/lib/prisma';
import { redirect } from 'next/navigation';

async function getCaseStudy(id) {
  return await prisma.caseStudy.findUnique({
    where: { id },
    include: {
      service: true,
    },
  });
}

async function getServices() {
  return await prisma.service.findMany({
    select: {
      id: true,
      title: true,
    },
  });
}

export default async function EditCaseStudy({ params }) {
  const [caseStudy, services] = await Promise.all([
    getCaseStudy(params.id),
    getServices(),
  ]);

  if (!caseStudy) {
    redirect('/admin/case-studies');
  }

  const handleSave = async (data) => {
    'use server';
    
    try {
      await prisma.caseStudy.update({
        where: { id: params.id },
        data,
      });
      redirect('/admin/case-studies');
    } catch (error) {
      console.error('Error updating case study:', error);
      throw new Error('Failed to update case study');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <CaseStudyEditor
        initialData={caseStudy}
        services={services}
        onSave={handleSave}
      />
    </div>
  );
}