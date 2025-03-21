import React from 'react';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Define the Button component
function Button({ children, variant = 'default', className, onClick, ...props }) {
  return (
    <button
      className={`w-full h-12 text-lg rounded-md ${
        variant === 'default'
          ? 'bg-primary text-white hover:bg-primary-dark'
          : 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-black'
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

// Define the Card component
function Card({ children }) {
  return (
    <div className="border rounded-lg shadow-sm bg-white">
      {children}
    </div>
  );
}

// Define the CardContent component
function CardContent({ children, className }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

// Define the Separator component
function Separator({ className }) {
  return (
    <hr className={`border-t border-gray-200 ${className}`} />
  );
}

// Main ClubBooking component
function ClubBooking5() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleBookClubClick = () => {
    navigate('/clubbooking');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      {/* Hero Image */}
      <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
        <img
          src="https://imagewedz.oyoroomscdn.com/medium/photologue/images/the-grand-thakar-the-grand-thakar-hall-7.jpg"
          alt="Club Venue"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Club Title and Location */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">The Elite Club</h1>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          <p>Mumbai, Maharashtra</p>
        </div>
      </div>

      {/* Amenities Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Amenities</h2>
        <div className="prose max-w-none text-muted-foreground">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Spacious indoor & outdoor areas – Ideal for parties, corporate events, and social gatherings.
            </li>
            <li>
              Elegant decor & customizable layouts – Tailored to your theme and preferences.
            </li>
            <li>
              High-quality lighting & sound system – Perfect for music and entertainment.
            </li>
            <li>
              Air-conditioned spaces – Ensuring guest comfort throughout the event.
            </li>
            <li>
              On-site parking & valet services – Hassle-free parking experience for guests.
            </li>
            <li>
              Dedicated restrooms – Clean and well-maintained facilities for all attendees.
            </li>
            <li>
              Fully equipped bar & catering services – For seamless dining and drinking experiences.
            </li>
            <li>
              Dance floor & stage – Perfect for performances and DJs.
            </li>
            <li>
              VIP lounges – Exclusive spaces for VIP guests.
            </li>
            <li>
              Power backup & WiFi – Uninterrupted event experience.
            </li>
            <li>
              Security services – Ensuring a safe and secure environment for all guests.
            </li>
          </ul>
        </div>
      </section>

      {/* Capacity Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Capacity</h2>
        <p className="text-muted-foreground">
          Our club can accommodate up to 500 guests in a standing setup, while the seated arrangement allows for up to 300 guests. The outdoor space is perfect for open-air events, hosting up to 700 guests comfortably.
        </p>
      </section>

      {/* Policies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="font-medium">Room Count</h3>
              <p className="text-2xl font-semibold">3 Rooms</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="font-medium">Catering Policy</h3>
              <p className="text-muted-foreground">
                In-house catering only. Outside food not allowed.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-center space-y-2">
              <h3 className="font-medium">Decor Policy</h3>
              <p className="text-muted-foreground">
                External decorators allowed. Also in-house decor provided.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charges Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Charges</h2>
        <p className="text-xl font-medium text-primary">₹25,000 per day</p>
      </section>

      {/* Booking Button */}
      <div className="space-y-4 pt-4">
        <Button
          className="w-full h-12 text-lg"
          variant="outline"
          onClick={handleBookClubClick} // Add onClick handler
        >
          Click Here to Book the Club
        </Button>
      </div>

      <Separator className="my-8" />
    </div>
  );
}

export default ClubBooking5;