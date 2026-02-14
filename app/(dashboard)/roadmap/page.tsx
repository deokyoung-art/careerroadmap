'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, CheckCircle2, Clock, Circle } from 'lucide-react'
import { useState } from 'react'

type RoadmapItem = {
  id: string
  grade: 1 | 2 | 3
  title: string
  description: string
  status: 'pending' | 'in_progress' | 'completed'
  targetDate?: string
}

export default function RoadmapPage() {
  // Mock data
  const [roadmaps] = useState<RoadmapItem[]>([
    {
      id: '1',
      grade: 1,
      title: '정보처리기능사 자격증 취득',
      description: '1학년 1학기 내 필기 합격, 2학기 실기 합격 목표',
      status: 'completed',
      targetDate: '2023-11-30'
    },
    {
      id: '2',
      grade: 1,
      title: 'HTML/CSS/JavaScript 기초 학습',
      description: '웹 개발의 기초를 다지고 간단한 포트폴리오 사이트 제작',
      status: 'completed',
      targetDate: '2024-01-15'
    },
    {
      id: '3',
      grade: 2,
      title: 'React 프레임워크 마스터',
      description: 'React를 활용한 SPA 개발 능력 습득 및 프로젝트 3개 완성',
      status: 'in_progress',
      targetDate: '2024-08-30'
    },
    {
      id: '4',
      grade: 2,
      title: '교내 공모전 수상',
      description: '교내 프로그래밍 공모전에서 입상 이상 달성',
      status: 'in_progress',
      targetDate: '2024-10-15'
    },
    {
      id: '5',
      grade: 3,
      title: '현장실습 우수 평가',
      description: '현장실습에서 A 이상 평가 받고 채용 제안 받기',
      status: 'pending',
      targetDate: '2025-05-30'
    },
    {
      id: '6',
      grade: 3,
      title: '대기업 취업 성공',
      description: '목표 기업에 최종 합격하여 취업 성공',
      status: 'pending',
      targetDate: '2025-09-30'
    },
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-6 h-6 text-green-600" />
      case 'in_progress':
        return <Clock className="w-6 h-6 text-blue-600" />
      default:
        return <Circle className="w-6 h-6 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return '완료'
      case 'in_progress':
        return '진행중'
      default:
        return '예정'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in_progress':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const gradeRoadmaps = {
    1: roadmaps.filter(r => r.grade === 1),
    2: roadmaps.filter(r => r.grade === 2),
    3: roadmaps.filter(r => r.grade === 3),
  }

  const totalGoals = roadmaps.length
  const completedGoals = roadmaps.filter(r => r.status === 'completed').length
  const progress = Math.round((completedGoals / totalGoals) * 100)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">나의 로드맵</h1>
          <p className="mt-1 text-sm text-gray-500">3년간의 성장 계획을 한눈에 확인하세요</p>
        </div>
        <Button className="bg-primary">
          <Plus className="w-4 h-4 mr-2" />
          새 목표 추가
        </Button>
      </div>

      {/* Progress Overview */}
      <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <CardHeader>
          <CardTitle>전체 진행률</CardTitle>
          <CardDescription>3년 로드맵 달성 현황</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <span className="text-3xl font-bold text-primary">{progress}%</span>
            <span className="text-sm text-gray-500">
              {completedGoals} / {totalGoals} 목표 달성
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-primary to-secondary h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Timeline */}
      <div className="space-y-8">
        {[1, 2, 3].map((grade) => (
          <div key={grade} className="relative">
            {/* Grade Header */}
            <div className="sticky top-0 z-10 bg-gray-50 pb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full text-white font-bold text-lg">
                  {grade}학년
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{grade}학년 목표</h2>
                  <p className="text-sm text-gray-500">
                    {gradeRoadmaps[grade as 1 | 2 | 3].filter(r => r.status === 'completed').length} /{' '}
                    {gradeRoadmaps[grade as 1 | 2 | 3].length} 완료
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="ml-6 border-l-2 border-gray-200 space-y-6 pb-8">
              {gradeRoadmaps[grade as 1 | 2 | 3].map((item, index) => (
                <div key={item.id} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-0 -translate-x-1/2 mt-1.5">
                    {getStatusIcon(item.status)}
                  </div>

                  {/* Content Card */}
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {getStatusText(item.status)}
                        </span>
                      </div>
                      {item.targetDate && (
                        <CardDescription>목표일: {item.targetDate}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
