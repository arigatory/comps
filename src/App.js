import Accordion from './components/Accordion';

export default function App() {
  const items = [
    {
      id: 'asd',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want',
    },
    {
      id: 'afds',
      label: 'Can I use Css on a project?',
      content: 'You can use Css on any project you want',
    },
    {
      id: 'aad',
      label: 'Can I use JS on a project?',
      content: 'You can use JS on any project you want',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}
