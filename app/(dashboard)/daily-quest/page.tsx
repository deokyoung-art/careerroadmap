'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, CheckCircle2, Circle, Flame } from 'lucide-react'
import { useState } from 'react'

type DailyGoal = {
  id: string
  content: string
  isCompleted: boolean
  date: string
}

export default function DailyQuestPage() {
  const today = new Date().toISOString().split('T')[0]

  // Mock data
  const [goals, setGoals] = useState<DailyGoal[]>([
    { id: '1', content: '정보처리기능사 필기 문제 10개 풀기', isCompleted: true, date: today },
    { id: '2', content: 'React Hook 개념 정리하기', isCompleted: true, date: today },
    { id: '3', content: '포트폴리오 프로젝트 README 작성', isCompleted: false, date: today },
  ])

  const completedCount = goals.filter(g => g.isCompleted).length
  const totalGoals = goals.length
  const completionRate = totalGoals > 0 ? Math.round((completedCount / totalGoals) * 100) : 0

  // 연속 달성 일수 (Mock)
  const streakDays = 7

  const toggleGoal = (id: string) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, isCompleted: !goal.isCompleted } : goal
    ))
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">데일리 퀘스트</h1>
          <p className="mt-1 text-sm text-gray-500">오늘의 목표를 달성하고 성장하세요</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">오늘</p>
          <p className="text-lg font-semibold text-gray-900">
            {new Date().toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'short'
            })}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">오늘의 달성률</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{completionRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {completedCount} / {totalGoals} 완료
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">연속 달성</CardTitle>
            <Flame className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-500">{streakDays}일</div>
            <p className="text-xs text-muted-foreground mt-1">멈추지 마세요! 🔥</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">이번 주 달성</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-secondary">18개</div>
            <p className="text-xs text-muted-foreground mt-1">목표 완료</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Goals */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>오늘의 목표</CardTitle>
              <CardDescription>
                하루 3가지 목표를 설정하고 달성하세요
              </CardDescription>
            </div>
            <Button className="bg-primary">
              <Plus className="w-4 h-4 mr-2" />
              목표 추가
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {goals.length === 0 ? (
              <div className="text-center py-12">
                <Circle className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">아직 오늘의 목표가 없습니다</p>
                <p className="text-sm text-gray-400 mt-2">첫 번째 목표를 추가해보세요!</p>
              </div>
            ) : (
              goals.map((goal) => (
                <div
                  key={goal.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all cursor-pointer ${
                    goal.isCompleted
                      ? 'bg-green-50 border-green-200 hover:bg-green-100'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => toggleGoal(goal.id)}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="flex-shrink-0">
                      {goal.isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`text-base font-medium ${
                          goal.isCompleted
                            ? 'text-green-900 line-through'
                            : 'text-gray-900'
                        }`}
                      >
                        {goal.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {goals.length > 0 && completionRate === 100 && (
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-green-900">
                    🎉 오늘의 목표를 모두 달성했습니다!
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    훌륭해요! 내일도 화이팅하세요!
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Weekly Calendar */}
      <Card>
        <CardHeader>
          <CardTitle>이번 주 활동</CardTitle>
          <CardDescription>주간 목표 달성 현황</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-4">
            {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => {
              const completed = index < 5 // Mock: 월~금 완료
              const isToday = index === 4 // Mock: 금요일이 오늘

              return (
                <div key={day} className="text-center">
                  <div className="text-sm font-medium text-gray-500 mb-2">{day}</div>
                  <div
                    className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                      isToday
                        ? 'bg-primary text-white ring-4 ring-primary/20'
                        : completed
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {completed ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <Circle className="w-6 h-6" />
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    {completed ? '3/3' : '0/3'}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">💡 성공 팁</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>매일 아침 3가지 목표를 설정하세요</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>구체적이고 달성 가능한 목표로 설정하세요</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>작은 성공을 축하하며 동기부여를 유지하세요</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>연속 달성 기록을 유지하면 습관이 됩니다</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
