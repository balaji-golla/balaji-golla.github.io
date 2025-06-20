
import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: "Your Name",
  title: "Senior Frontend React Engineer | UI/UX Enthusiast",
  bio: "Passionate developer with a knack for creating intuitive and visually appealing web experiences. Always learning and exploring new technologies.",
  longBio: `
    <p class="mb-4">Hello! I'm Your Name, a dedicated Senior Frontend React Engineer with a deep passion for UI/UX design and crafting seamless, engaging digital experiences. With X years of experience in the field, I specialize in building complex web applications using React, TypeScript, and modern JavaScript frameworks.</p>
    <p class="mb-4">My approach to development is user-centric, always striving to understand the end-user's needs to deliver solutions that are not only functional but also delightful to use. I believe in clean code, robust architecture, and continuous learning to stay at the forefront of web technologies.</p>
    <p class="mb-4">Throughout my career, I've had the opportunity to work on diverse projects, from large-scale enterprise platforms to innovative startup products. This has equipped me with a versatile skill set and the ability to adapt to different challenges and team dynamics.</p>
    <p>When I'm not coding, I enjoy contributing to open-source projects, exploring new design trends, and [Your Hobby Here].</p>
  `,
  email: "your.email@example.com",
  linkedinUsername: "yourlinkedinusername", // Just the username, not the full URL
  githubUsername: "yourgithubusername",
  avatarUrl: "./assets/images/profile-avatar.png", // User needs to create this image: assets/images/profile-avatar.png
  resumeUrl: "./assets/documents/your-resume.pdf" // User needs to create this file: assets/documents/your-resume.pdf
};
