import { ExternalLink } from 'react-icons/fa';

const StageI = () => {
  return (
    <div>
      <h2>Stage I: Overview</h2>
      <p>
        Check out our documentation at <a href="https://example.com/docs" style={{ color: 'blue', textDecoration: 'underline' }}>Documentation <ExternalLink /></a> for more details.
      </p>
      <p>
        Learn more about our project on <a href="https://example.com/project" style={{ color: 'blue', textDecoration: 'underline' }}>Project Overview <ExternalLink /></a>.
      </p>
    </div>
  );
};

export default StageI;