import { GoBug, GoDashboard, GoHeart } from 'react-icons/go';
import Button from '../components/Button';

export default function ButtonPage() {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div>
      <div>
        <Button
          className="mb-5"
          secondary
          outline
          rounded
          onClick={handleClick}
        >
          <GoBug />
          Click me
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDashboard />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoHeart />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something...
        </Button>
      </div>
    </div>
  );
}
