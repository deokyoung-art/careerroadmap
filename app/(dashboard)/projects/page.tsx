'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

type Project = {
  id: string
  title: string
  description: string
  techStack: string[]
  imageUrl?: string
  linkUrl?: string
  githubUrl?: string
  tags: string[]
  startDate: string
  endDate?: string
}

export default function ProjectsPage() {
  // Mock data
  const [projects] = useState<Project[]>([
    {
      id: '1',
      title: 'Job Navigator',
      description: '특성화고 학생을 위한 취업 및 진로 관리 웹 플랫폼입니다. Next.js와 Supabase를 활용하여 개발했습니다.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      githubUrl: 'https://github.com/username/job-navigator',
      linkUrl: 'https://job-navigator.vercel.app',
      tags: ['웹개발', '풀스택', '포트폴리오'],
      startDate: '2024-01-15',
      endDate: '2024-02-14'
    },
    {
      id: '2',
      title: '학교 급식 메뉴 앱',
      description: '학교 급식 메뉴를 확인하고 평가할 수 있는 모바일 웹 애플리케이션입니다.',
      techStack: ['React', 'React Native', 'Firebase'],
      githubUrl: 'https://github.com/username/school-meal',
      tags: ['React', '모바일', '학교프로젝트'],
      startDate: '2023-11-01',
      endDate: '2023-12-20'
    },
    {
      id: '3',
      title: '재고 관리 시스템',
      description: '교내 창업동아리를 위한 간단한 재고 관리 시스템입니다.',
      techStack: ['Python', 'Django', 'PostgreSQL'],
      githubUrl: 'https://github.com/username/inventory-system',
      tags: ['Python', '백엔드', '동아리'],
      startDate: '2023-09-01',
      endDate: '2023-10-30'
    },
    {
      id: '4',
      title: '알고리즘 스터디',
      description: '백준 온라인 저지 문제 풀이 모음입니다. 자료구조와 알고리즘을 학습했습니다.',
      techStack: ['Java', 'C++', 'Python'],
      githubUrl: 'https://github.com/username/algorithm-study',
      tags: ['알고리즘', '자료구조', '코딩테스트'],
      startDate: '2023-03-01'
    },
  ])

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">프로젝트 아카이브</h1>
          <p className="mt-1 text-sm text-gray-500">나의 프로젝트와 학습 기록을 관리하세요</p>
        </div>
        <Button className="bg-primary">
          <Plus className="w-4 h-4 mr-2" />
          새 프로젝트
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">총 프로젝트</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{projects.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">사용 기술</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">
              {new Set(projects.flatMap(p => p.techStack)).size}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">완료된 프로젝트</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">
              {projects.filter(p => p.endDate).length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tags Filter */}
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-gray-700 py-2">태그:</span>
        {allTags.map((tag) => (
          <button
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                {!project.endDate && (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                    진행중
                  </span>
                )}
              </div>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              {/* Tech Stack */}
              <div className="mb-4">
                <p className="text-xs font-medium text-gray-500 mb-2">기술 스택</p>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <p className="text-xs font-medium text-gray-500 mb-2">태그</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-600"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dates */}
              <div className="mt-4 text-xs text-gray-500">
                {project.startDate}
                {project.endDate && ` ~ ${project.endDate}`}
              </div>
            </CardContent>

            <CardFooter className="flex gap-2">
              {project.githubUrl && (
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              )}
              {project.linkUrl && (
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <Card className="py-16">
          <CardContent className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Plus className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              첫 번째 프로젝트를 추가하세요
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              프로젝트를 기록하고 포트폴리오를 만들어보세요
            </p>
            <Button className="bg-primary">
              <Plus className="w-4 h-4 mr-2" />
              프로젝트 추가
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
