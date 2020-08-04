import * as React from 'react';
import {CoursesList} from './common/components/CoursesList';

function App() {
  const courses = [{
    name: 'name1'
  }, {
    name: 'name2'
  }, {
    name: 'name3'
  }];

  return (
    <div className="App">
      <CoursesList coursesList={courses} />
    </div>
  );
}


export default App;