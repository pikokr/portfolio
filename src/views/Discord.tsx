import React from 'react'

const Discord = () => {
  return (
    <div>
      <div className="text-4xl text-center pt-4">디스코드</div>
      <div className="text-2xl text-center">
        파랑이가 소속된 팀들의 디스코드 서버입니다.
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="bg-white border rounded-xl p-4">
          <div className="text-xl">피코스튜디오</div>
          <div>파랑이가 만든 프로그래밍 팀이에요!</div>
          <div className="mt-1">
            <a
              href="https://discord.gg/3c5K4pf"
              target="_blank"
              className="p-2 bg-blue-500 text-white rounded-lg"
            >
              들어가기
            </a>
          </div>
        </div>
        <div className="bg-white border rounded-xl p-4">
          <div className="text-xl">팀 샌드위치</div>
          <div>
            <span className="line-through">아싸</span> 크리에이터들이 모여서
            만든 팀이에요!
          </div>
          <div className="mt-1">
            <a
              href="https://discord.gg/WNnGQdFMKY"
              target="_blank"
              className="p-2 bg-blue-500 text-white rounded-lg"
            >
              들어가기
            </a>
          </div>
        </div>
        <div className="bg-white border rounded-xl p-4">
          <div className="text-xl">UniqueCode</div>
          <div>
            파랑이가 소속된 프로그래밍 팀이에요! 여기서 UniqueBots를 만들었어요!
          </div>
          <div className="mt-1">
            <a
              href="https://discord.gg/XjWgaHMsdD"
              target="_blank"
              className="p-2 bg-blue-500 text-white rounded-lg"
            >
              들어가기
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discord
