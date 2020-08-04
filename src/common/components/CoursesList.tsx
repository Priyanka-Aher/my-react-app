import * as React from 'react';
import {Course} from '../models/Course';

interface CoursesListProps {
    coursesList: Course[]
}

export const CoursesList = ({coursesList} : CoursesListProps) => {
  
  return (<>
    <ul>
      {
        coursesList && coursesList.map((course, index) => {
          return (
            <li key={index}>{course.name}</li>
          );
        })
      }
    </ul> 
  </>);
}