import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby }) {
  console.log(beanieBaby);
  return (
    <Link to={`/BeanieDetail/${beanieBaby.id}`}>
      <div className='beanie-detail'>
        <img src={beanieBaby.image} />
        <h3>{beanieBaby.title}</h3>
      </div>
    </Link>
  );
}
