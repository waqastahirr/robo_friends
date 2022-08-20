import React from 'react';
import Card from './Card';
import CardSkeleton from './CardSkeleton'
const obj = {
  id: 1,
  name: 'PRO',
  section: 'F',
  dob: '9-11-99',
  courses: [
    'PF',
    'OOP'
  ]
};
const cardList = ({ robots, loading }) => {

  const skeletonEntries = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="robots-container">
      {loading ?
        skeletonEntries.map(entry =>
          <CardSkeleton key={entry} />
        ) :
        robots.map(robot =>
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        )
      }
    </div>
  )
}

export default cardList;