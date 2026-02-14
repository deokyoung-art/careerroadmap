'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { TrendingUp, Target, CheckCircle2, Calendar } from 'lucide-react'

export default function DashboardPage() {
  // Mock data - 실제로는 Supabase에서 가져올 데이터
  const stats = {
    totalGoals: 150,
    completedGoals: 98,
    roadmapProgress: 65,
    projectsCount: 8,
  }

  const recentActivities = [
    { id: 1, title: '정보처리기능사 필기 공부', date: '2024-02-14', type: 'study' },
    { id: 2, title: 'React 포트폴리오 프로젝트 완료', date: '2024-02-13', type: 'project' },
    { id: 3, title: '자바 알고리즘 문제 3개 풀이', date: '2024-02-12', type: 'coding' },
  ]

  const upcomingEvents = [
    { id: 1, title: '취업 박람회', date: '2024-03-15', daysLeft: 30 },
    { id: 2, title: '정보처리기능사 시험', date: '2024-04-20', daysLeft: 65 },
  ]

  const completionRate = Math.round((stats.completedGoals / stats.totalGoals) * 100)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
          <p className="mt-1 text-sm text-gray-500">나의 성장을 한눈에 확인하세요</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">오늘</p>
          <p className="text-lg font-semibold text-gray-900">
            {new Date().toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">목표 달성률</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{completionRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats.completedGoals} / {stats.totalGoals} 완료
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">로드맵 진행률</CardTitle>
            <Target className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">{stats.roadmapProgress}%</div>
            <Progress value={stats.roadmapProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">완료한 목표</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.completedGoals}</div>
            <p className="text-xs text-muted-foreground mt-1">이번 학기</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">프로젝트 수</CardTitle>
            <Calendar className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{stats.projectsCount}</div>
            <p className="text-xs text-muted-foreground mt-1">포트폴리오</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
            <CardDescription>최근 완료한 활동들입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activity.type === 'project'
                      ? 'bg-purple-100 text-purple-700'
                      : activity.type === 'study'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {activity.type === 'project' ? '프로젝트' : activity.type === 'study' ? '학습' : '코딩'}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>다가오는 일정</CardTitle>
            <CardDescription>중요한 이벤트를 놓치지 마세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{event.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">D-{event.daysLeft}</p>
                    <p className="text-xs text-gray-500">일 남음</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grass Grid (GitHub-style contribution calendar) */}
      <Card>
        <CardHeader>
          <CardTitle>활동 잔디</CardTitle>
          <CardDescription>일일 목표 달성 현황을 확인하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-12 gap-2">
            {Array.from({ length: 84 }).map((_, i) => {
              const intensity = Math.floor(Math.random() * 5)
              return (
                <div
                  key={i}
                  className={`aspect-square rounded ${
                    intensity === 0
                      ? 'bg-gray-100'
                      : intensity === 1
                      ? 'bg-green-200'
                      : intensity === 2
                      ? 'bg-green-400'
                      : intensity === 3
                      ? 'bg-green-600'
                      : 'bg-green-800'
                  }`}
                  title={`${intensity} 활동`}
                />
              )
            })}
          </div>
          <div className="flex items-center justify-end mt-4 space-x-2 text-xs text-gray-500">
            <span>적음</span>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-gray-100 rounded"></div>
              <div className="w-3 h-3 bg-green-200 rounded"></div>
              <div className="w-3 h-3 bg-green-400 rounded"></div>
              <div className="w-3 h-3 bg-green-600 rounded"></div>
              <div className="w-3 h-3 bg-green-800 rounded"></div>
            </div>
            <span>많음</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
