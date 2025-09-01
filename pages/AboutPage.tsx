
import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import { TEAM_MEMBERS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">About E-Fusion</h1>
          <p className="text-lg text-accent max-w-3xl mx-auto">
            We started E-Fusion with a simple goal: to create a seamless and enjoyable online shopping experience. Our mission is to provide high-quality products, exceptional customer service, and a platform that customers can trust.
          </p>
        </section>

        {/* Our Values Section */}
        <section className="grid md:grid-cols-3 gap-8 text-center mb-16">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary mb-2">Customer First</h3>
            <p className="text-accent">Our customers are at the heart of everything we do. We strive to exceed expectations with every interaction.</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary mb-2">Quality & Innovation</h3>
            <p className="text-accent">We are committed to sourcing the best products and continuously improving our platform with the latest technology.</p>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-primary mb-2">Integrity</h3>
            <p className="text-accent">We operate with honesty and transparency, building lasting relationships based on trust.</p>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="bg-gray-100 py-16 rounded-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM_MEMBERS.map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
