import React from 'react'
import CountUp from 'react-countup'

const Stats = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 border-t border-gray-200">
  <div className="
    stats 
    stats-vertical 
    lg:stats-horizontal 
    shadow 
    w-full
    text-center
    grid
    md:grid-cols-2
    lg:grid-cols-4
  ">
    {/* STAT 1 */}
    <div className="stat px-6 py-8 lg:px-10 lg:py-12">
      <div className="stat-title text-lg ">
        Зареєстровано ФОП
      </div>
      <div className="stat-value text-5xl md:text-6xl font-light mt-3">
        <CountUp
          end={1000}
          duration={4}
          enableScrollSpy
          scrollSpyOnce
        />
        +
      </div>
    </div>

    {/* STAT 2 */}
    <div className="stat px-6 py-8 lg:px-10 lg:py-12">
      <div className="stat-title text-lg ">
        Відкритих підприємств
      </div>
      <div className="stat-value text-5xl md:text-6xl font-light mt-3">
        <CountUp
          end={100}
          duration={4}
          enableScrollSpy
          scrollSpyOnce
        />
        +
      </div>
    </div>

    {/* STAT 3 */}
    <div className="stat px-6 py-8 lg:px-10 lg:py-12">
      <div className="stat-title text-lg ">
        Задоволених клієнтів
      </div>
      <div className="stat-value text-5xl  md:text-6xl font-light mt-3">
        <CountUp
          end={3000}
          duration={4}
          enableScrollSpy
          scrollSpyOnce
        />
        +
      </div>
    </div>

    <div className="stat px-6 py-8 lg:px-10 lg:py-12">
      <div className="stat-title text-lg ">
        Звертаються щомісяця
      </div>
      <div className="stat-value text-5xl  md:text-6xl font-light mt-3">
        <CountUp
          end={100}
          duration={4}
          enableScrollSpy
          scrollSpyOnce
        />
        +
      </div>
    </div>
  </div>
</section>


  )
}

export default Stats
