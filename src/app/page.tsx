import Introduction from '@/components/home/Introduction';
import Question from '@/components/home/Question';
import Recruit from '@/components/home/Recruit';
import Welcome from '@/components/home/Welcome';

export default function Home() {
  return (
    <main>
      <Welcome />
      <Introduction />
      <Recruit />
      {/* <Question /> */}
    </main>
  );
}
