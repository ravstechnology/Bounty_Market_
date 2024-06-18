import Navbar from '../components/Navbar';
import BountyDetails from '../components/BountyDetails';

const BountyDetailsPage = () => (
  <div>
    <Navbar />
    <div className="container mx-auto p-4">
      <BountyDetails
        title="Detailed View of Bounty"
        description="This bounty requires you to solve a complex algorithm problem related to data structures."
        requirements={["Strong knowledge of algorithms and data structures", "Ability to write clean and efficient code", "Experience with competitive programming"]}
        reward="501"
      />
    </div>
  </div>
);


export default BountyDetailsPage;