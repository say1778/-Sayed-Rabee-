
import React from 'react';
import type { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
      <img className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" src={member.imageUrl} alt={member.name} />
      <h3 className="text-xl font-bold text-primary">{member.name}</h3>
      <p className="text-highlight font-semibold mb-2">{member.role}</p>
      <p className="text-accent">{member.bio}</p>
    </div>
  );
};

export default TeamMemberCard;
