import Link from 'next/link';
import StudentInfo from './StudentInfo';


export default function PageJS(){
  return(
    <>
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo /> 
      <nav>
      <Link href="/week2">Week-2</Link>
      </nav>
      <nav>
      <Link href ="/week3">week-3</Link>
      </nav>
      <nav>
      <Link href ="/week4">week-4</Link>
      </nav>
  
    </>
  );
}


