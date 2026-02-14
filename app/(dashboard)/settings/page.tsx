'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User, School, Briefcase, Bell, Lock, Palette } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [profile] = useState({
    name: '홍길동',
    email: 'hong@example.com',
    schoolName: '서울소프트웨어마이스터고등학교',
    major: '소프트웨어개발과',
    grade: 2,
    bio: '풀스택 개발자를 꿈꾸는 학생입니다.',
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">설정</h1>
        <p className="mt-1 text-sm text-gray-500">프로필과 앱 설정을 관리하세요</p>
      </div>

      {/* Profile Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <User className="w-5 h-5 text-primary" />
            <div>
              <CardTitle>프로필 정보</CardTitle>
              <CardDescription>기본 프로필 정보를 관리합니다</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">이름</label>
            <input
              type="text"
              value={profile.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
            <input
              type="email"
              value={profile.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">자기소개</label>
            <textarea
              value={profile.bio}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              readOnly
            />
          </div>

          <div className="flex justify-end">
            <Button className="bg-primary">프로필 수정</Button>
          </div>
        </CardContent>
      </Card>

      {/* School Info Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <School className="w-5 h-5 text-secondary" />
            <div>
              <CardTitle>학교 정보</CardTitle>
              <CardDescription>학교 및 전공 정보를 관리합니다</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">학교명</label>
            <input
              type="text"
              value={profile.schoolName}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              readOnly
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">전공</label>
              <input
                type="text"
                value={profile.major}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                readOnly
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">학년</label>
              <input
                type="text"
                value={`${profile.grade}학년`}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                readOnly
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-secondary">학교 정보 수정</Button>
          </div>
        </CardContent>
      </Card>

      {/* Career Goals */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Briefcase className="w-5 h-5 text-orange-500" />
            <div>
              <CardTitle>진로 목표</CardTitle>
              <CardDescription>장기 진로 계획을 설정합니다</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">희망 직무</label>
            <input
              type="text"
              placeholder="예: 풀스택 개발자"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">목표 기업</label>
            <input
              type="text"
              placeholder="예: 네이버, 카카오, 삼성전자"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex justify-end">
            <Button variant="outline">저장</Button>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5 text-blue-500" />
            <div>
              <CardTitle>알림 설정</CardTitle>
              <CardDescription>알림 수신 방식을 관리합니다</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">일일 목표 알림</p>
              <p className="text-sm text-gray-500">매일 아침 목표 설정 알림</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">진행률 요약</p>
              <p className="text-sm text-gray-500">주간 진행 상황 요약</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200">
              <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">일정 알림</p>
              <p className="text-sm text-gray-500">중요 일정 하루 전 알림</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
              <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Palette className="w-5 h-5 text-purple-500" />
            <div>
              <CardTitle>테마 설정</CardTitle>
              <CardDescription>앱 테마를 변경합니다</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <button className="p-4 border-2 border-primary rounded-lg bg-white">
              <div className="w-full h-20 bg-gradient-to-br from-white to-gray-100 rounded mb-2"></div>
              <p className="text-sm font-medium text-center">라이트</p>
            </button>

            <button className="p-4 border-2 border-gray-200 rounded-lg bg-white hover:border-gray-300">
              <div className="w-full h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded mb-2"></div>
              <p className="text-sm font-medium text-center text-gray-500">다크</p>
            </button>

            <button className="p-4 border-2 border-gray-200 rounded-lg bg-white hover:border-gray-300">
              <div className="w-full h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded mb-2"></div>
              <p className="text-sm font-medium text-center text-gray-500">자동</p>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Privacy */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-red-500" />
            <div>
              <CardTitle>개인정보 및 보안</CardTitle>
              <CardDescription>계정 보안을 관리합니다</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button variant="outline" className="w-full justify-start">
            비밀번호 변경
          </Button>

          <Button variant="outline" className="w-full justify-start">
            데이터 내보내기
          </Button>

          <Button variant="destructive" className="w-full justify-start">
            계정 삭제
          </Button>
        </CardContent>
      </Card>

      {/* App Info */}
      <Card className="bg-gray-50">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Job Navigator
            </h3>
            <p className="text-sm text-gray-500">버전 1.0.0</p>
            <p className="text-xs text-gray-400">
              특성화고 학생을 위한 취업 관리 플랫폼
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
