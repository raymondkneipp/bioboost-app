<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/raymondkneipp/bioboost-app">
    <img src="public/logo.svg" alt="Bioboost" width="80" height="80">
  </a>

<h3 align="center">BioBoost App</h3>

  <p align="center">
    Reach your goals faster with this health and productivity tool.
    <br />
    <a href="https://github.com/raymondkneipp/bioboost-app"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://app.bioboost.fit">View Demo</a>
    ·
    <a href="https://github.com/raymondkneipp/bioboost-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/raymondkneipp/bioboost-app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![BioBoost App Screenshot][product-screenshot]](https://app.bioboost.fit)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][next.js]][next-url]
- [![React][react.js]][react-url]
- [![Tailwind CSS][tailwindcss]][tailwindcss-url]
- [![HeadlessUI][headlessui]][headlessui-url]
- [![React Hook Form][reacthookform]][reacthookform-url]
- [![Prisma][prisma]][prisma-url]
- [![Railway][railway]][railway-url]
- [![tRPC][trpc]][trpc-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- npm

  ```sh
  npm install npm@latest -g
  ```

- PostgreSQL database
  - I recommend using either [PlanetScale](https://planetscale.com/) or [Railway](https://railway.app?referralCode=JMzfrz).

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/raymondkneipp/bioboost-app.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Set up the Next Auth DiscordProvider

   - Head to [the Applications section in the Discord Developer Portal](https://discord.com/developers/applications), and click on “New Application”
   - In the settings menu, go to “OAuth2 => General”
   - Copy the Client ID and paste it in `DISCORD_CLIENT_ID` in `.env`.
   - Under Client Secret, click “Reset Secret” and copy that string to `DISCORD_CLIENT_SECRET` in `.env`. Be careful as you won’t be able to see this secret again, and resetting it will cause the existing one to expire.
   - Click “Add Redirect” and paste in `<app url>/api/auth/callback/discord` (example for local development: `http://localhost:3000/api/auth/callback/discord`)
   - Save your changes

4. Set up Next Auth

   Set `NEXTAUTH_SECRET` in `.env` using output from `openssl rand -base64 32`

5. Connect to Database

   Set `DATABASE_URL` in `.env` to the connection URL provided by your database provider.

6. Push schema to database

   ```sh
   npx prisma db push
   ```

7. Open Prisma Studio

   ```sh
   npx prisma studio
   ```

8. Run the project

   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] Habit Stacks
  - [ ] Order habits
  - [ ] Frequency (weekly, on these days, etc.)
  - [ ] Time to begin / complete
- [x] Bad Habits
- [ ] Goals
  - [ ] Short term goals (within 2 months)
  - [ ] Medium term goals (within 2 years)
  - [ ] Long term goals (2+ years)
  - [ ] SMART goals
- [x] Mood
  - "great", "good", "okay", "bad", "awful"
  - [ ] additional notes
- [ ] Journal
  - [ ] 3 things to accomplish tomorrow
  - [ ] List things you are grateful for
  - [ ] Yearly, monthly self reflection journal
- [ ] Water tracker
- [x] Weight tracker
- [ ] Sleep tracker
  - No electronics past X
- [ ] Caffeine tracker
  - No caffeine past X time
  - No more than X mg of caffeine per day
  - Feature to slowely taper down
- [ ] Time boxing
- [ ] Workout tracker
- [ ] Cardio tracker
- [ ] Meal tracker / meal planner
- [ ] Breathing exercises
- [ ] Meditation guides
- [ ] Intermittent fasting
- [ ] Stretching
  - Warm up / dynamic
  - Cool down / static
- [ ] Whiteboard
  - A place to write down ideas

See the [open issues](https://github.com/raymondkneipp/bioboost-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Raymond Kneipp - [@rfkquery](https://twitter.com/twitter_handle) - hello@raymondkneipp.com

Project Link: [https://github.com/raymondkneipp/bioboost-app](https://github.com/raymondkneipp/bioboost-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Create T3 App](https://create.t3.gg/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/raymondkneipp/bioboost-app.svg?style=for-the-badge
[contributors-url]: https://github.com/raymondkneipp/bioboost-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/raymondkneipp/bioboost-app.svg?style=for-the-badge
[forks-url]: https://github.com/raymondkneipp/bioboost-app/network/members
[stars-shield]: https://img.shields.io/github/stars/raymondkneipp/bioboost-app.svg?style=for-the-badge
[stars-url]: https://github.com/raymondkneipp/bioboost-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/raymondkneipp/bioboost-app.svg?style=for-the-badge
[issues-url]: https://github.com/raymondkneipp/bioboost-app/issues
[license-shield]: https://img.shields.io/github/license/raymondkneipp/bioboost-app.svg?style=for-the-badge
[license-url]: https://github.com/raymondkneipp/bioboost-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: public/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[trpc]: https://img.shields.io/badge/tRPC-111111?style=for-the-badge&logo=trpc&logoColor=#327DB9
[trpc-url]: https://trpc.io/
[prisma]: https://img.shields.io/badge/Prisma-ffffff?style=for-the-badge&logo=prisma&logoColor=5967D8
[prisma-url]: https://www.prisma.io/
[reacthookform]: https://img.shields.io/badge/React%20Hook%20Form-081328?style=for-the-badge&logo=reacthookform&logoColor=EC5990
[reacthookform-url]: https://react-hook-form.com/
[headlessui]: https://img.shields.io/badge/Headlessui-111827?style=for-the-badge&logo=headlessui&logoColor=6CBEFD
[headlessui-url]: https://headlessui.com/
[tailwindcss]: https://img.shields.io/badge/Tailwind%20CSS-0B1121?style=for-the-badge&logo=tailwindcss&logoColor=37BCF8
[tailwindcss-url]: https://tailwindcss.com/
[railway]: https://img.shields.io/badge/Railway-14111C?style=for-the-badge&logo=railway&logoColor=ffffff
[railway-url]: https://tailwindcss.com/
