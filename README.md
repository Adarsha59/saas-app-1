# Next.js SAAS Documentation - Explore AI Prompts and Tools

## Overview

Welcome to the documentation for our AI-powered SAAS platform. This platform allows users to discover AI prompts, tools, and more. Our app is powered by Gemini AI and uses a credit system to manage user interactions. Users can upgrade to premium plans for additional features when credits are exhausted.

This documentation will guide you through understanding the features, user flow, and credit system without diving into the technical codebase.

## Table of Contents

- [Introduction](#introduction)
- [User Roles and Authentication](#user-roles-and-authentication)
- [Credits System Overview](#credits-system-overview)
- [Premium Features and Plans](#premium-features-and-plans)
- [Explore AI Prompts and Tools](#explore-ai-prompts-and-tools)
- [User Journey](#user-journey)
- [FAQ](#faq)
- [Changelog](#changelog)
- [Contact and Support](#contact-and-support)
- [Developer Information](#Developer-Information)

## 1. Introduction

This platform is built to streamline user interactions with AI tools and prompts. Whether you're a content creator, developer, or an AI enthusiast, our platform provides a suite of AI-driven functionalities, making it easy to generate content, automate workflows, and explore innovative prompts.

Powered by Gemini AI, the platform provides a user-friendly interface for both casual and premium users.

## 2. User Roles and Authentication

### User Types

- **Guest Users**: Users who visit the platform without signing in can browse the homepage and view general features but cannot interact with AI prompts or tools.
- **Authenticated Users**: Users who sign up and log in using Clerk authentication will have access to the full set of features, including AI prompts and tools, as long as they have credits.

### Authentication Flow

- **Sign-up and Login**: New users must create an account through Clerk. Existing users can log in.
- **Session Management**: Once logged in, users will stay authenticated as long as their session is valid. Sessions will automatically expire after a period of inactivity for security purposes.

## 3. Credits System Overview

Our platform uses a credit-based system to regulate access to AI tools and prompts. Each time a user interacts with an AI tool (e.g., generating a prompt or using a feature), credits are deducted from their account.

### How the Credit System Works

- **Initial Credits**: Every authenticated user is provided a set number of credits upon account creation.
- **Credit Deduction**: Credits are deducted when a user accesses AI tools or features.
- **Credit Depletion**: When credits reach zero, the user will be restricted from using certain tools. They will be prompted to upgrade to a premium plan or purchase more credits.
- **Top-up Credits**: Users can purchase additional credits through the app’s in-built purchase system.

## 4. Premium Features and Plans

If a user runs out of credits, they can either wait for daily credit refresh (if applicable) or upgrade to premium plans. Premium users benefit from:

- **Unlimited Credits**: Premium users will not have credit restrictions.
- **Exclusive Tools**: Certain high-level AI prompts and tools are only available to premium users.
- **Priority Access**: Premium users get faster response times from the AI-powered features.

### Available Plans

- **Basic Plan**: Limited credits, access to core tools.
- **Premium Plan**: Unlimited credits, exclusive access to all tools.
- **Custom Plan**: Tailored for business needs, with added features like team collaboration, advanced API access, and more.

## 5. Explore AI Prompts and Tools

### Discover AI Prompts with Gemini AI

Gemini AI powers the heart of this platform, allowing users to explore a wide array of AI prompts, tools, and resources. Key features includes:

- **Prompt Generation**: AI-driven prompts for content creation, coding, or creative workflows.
- **AI Tools**: Access tools for text generation, image creation, and more.
- **One-Click Access**: Users can explore AI tools and prompts with just a click.

Each interaction uses a credit, with premium users enjoying additional features.

## 6. User Journey

### Step-by-Step Process

1. **Home Page**: Users land on the homepage where they are introduced to the platform’s features.
2. **Sign Up/Login**: Users sign up or log in using Clerk authentication.
3. **Explore AI Prompts and Tools**: After authentication, users can interact with AI prompts and tools, with each action costing credits.
4. **Credit Notifications**: Users are notified when their credits are low and given options to top up or upgrade.
5. **Upgrade to Premium**: Users can easily upgrade to a premium plan to unlock more features and unlimited credits.

## 7. FAQ

- **What happens when I run out of credits?**

  When your credits are depleted, you will no longer be able to access AI tools. You can either upgrade to a premium plan or purchase additional credits.

- **What is the difference between free and premium users?**

  Free users have limited credits and access to core tools. Premium users enjoy unlimited credits and access to exclusive tools.

- **How can I manage my account or view my credit balance?**

  Once logged in, your account dashboard will show your current credit balance, plan details, and an option to purchase more credits or upgrade.

## 8. Changelog

Keep track of platform updates, new features, and improvements.

## Conclusion

This documentation outlines the key features of the Next.js SAAS app built with Clerk authentication, credit-based access to AI tools, and premium upgrade options. The documentation is designed to help users and administrators understand the flow and functionality of the platform.

If you're looking for specific implementation details, please refer to the internal developer documentation.

# Developer Information

## Name

Adarsha Paudyal

## Contact Information

- **Email:** adarsha.pau@gmail.com
- **GitHub:** [github.com/Adarsha59/](https://github.com/Adarsha59/)

# 😍 Contribution

Contributions are always welcome, open a **Pull Request** and help us improve the project.
