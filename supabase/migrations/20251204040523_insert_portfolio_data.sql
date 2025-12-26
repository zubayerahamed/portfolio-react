/*
  # Insert Initial Portfolio Data

  This migration populates the portfolio database with initial profile data.
  
  1. Profile Data
    - Name: Zubayer Ahamed
    - Title: Fullstack Software Engineer
    - Complete biographical information
    - Contact details
    - Social media links
*/

DELETE FROM profile;

INSERT INTO profile (name, title, bio, email, phone, location, github_url, linkedin_url, twitter_url, resume_url)
VALUES (
  'Zubayer Ahamed',
  'Fullstack Software Engineer',
  'Experienced Fullstack Software Engineer specializing in Java platform with deep expertise in Spring Boot framework. I build scalable, robust enterprise applications and have a passion for clean code and best practices. With years of experience in backend development, I also work with modern frontend technologies to deliver complete solutions. Proficient in designing microservices architectures, optimizing database performance, and implementing secure REST APIs. Passionate about mentoring junior developers and staying updated with the latest technologies.',
  'zubayer@example.com',
  '+880 1234 567890',
  'Dhaka, Bangladesh',
  'https://github.com/zubayerahamed',
  'https://linkedin.com/in/zubayerahamed',
  'https://twitter.com/zubayerahamed',
  '/resume.pdf'
);
