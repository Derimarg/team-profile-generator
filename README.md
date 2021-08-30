
![Repo Size][repo-size]
![Language][GitHub-language]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

[![LinkedIn][linkedin-shield]][linkedin-url]
![MIT License][license-shield]

<br />
<p align="center">

<h3 align="center" id="team-profile-generator">Team Profile Generator</h3>

<p align="center">
As a manager, I want to generate a webpage that displays<br /> my team's basic info, so that I have quick access to their emails and GitHub profiles.
<br />
<a href="#how-to-download"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://drive.google.com/file/d/1KKqqR7dyTjwi98L1fbJG8xMbcPeMMjwl/view?usp=sharing">View Demo</a>
.
<a href="https://github.com/Derimarg/team-profile-generator/issues">Report Bug</a>
·
<a href="https://github.com/Derimarg/team-profile-generator/issues">Request Feature</a>
</p>
</p>
<br />
<br />



<details open="open">
<summary>Table of Contents</summary>
<ul>
<li><a href="#description">Description</a></li>
<li><a href="#technologies">Technologies</a></li>
<li><a href="#how-to-download">Download</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#test">Test</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#roadmap">Roadmap</a></li>
<li><a href="#contributing">Contributing</a></li>

<li><a href="#questions">Questions</a></li>
<li><a href="#license">License</a></li>
</ul>
</details>


---
  
## Description
  
These is a generator of webpage that displays team's basic info, the purpose is to have quick access to emails and GitHub profiles of teams, will follow the next conditions.

- This application will work with command-line that accepts user input.
- Providing my team members and their information, a `HTML` file is generated and displays a nicely formatted team roster based on user input.
- Clicking on an email address in the HTML, my default email program will open and populates the TO field of the email with the address.
- Clicking on the GitHub username, that GitHub profile opens in a new tab.
- Starting the application, will be prompted to enter the team manager’s name, employee ID, email address, and office number.
- Entering the team manager’s name, employee ID, email address, and office number, will be presented a menu with the option to add an engineer or an intern or to finish building my team.
- Selecting the engineer option, will be prompted to enter the engineer’s name, ID, email, and GitHub username, it will be taken back to the menu.
- Selecting the intern option, will be prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu.
- Deciding to finish building team, application will exit, and the `HTML` is generated.

### Example:

  ![Demo](./assets/images/demo.gif)


## Technologies

- Node.js
- NPM
- Inquirer.js
- Jest
- Bootstrap
- Font Awesome

[Back To Top](#team-profile-generator)

---

## How to Download

- Simply copy the **SSH** to the terminal or Download the **ZIP File**:

## Installation

- Use the follow command at your terminal, **git clone** (Create a working copy at your local repository):

  ```
  git clone git@github.com:Derimarg/team-profile-generator.git
  ```

- After cloned the repository, create your own repository, copy the files to your repository and type in your terminal the follow commands. 

  ```
  git status

  git add -A

  git commit -m "Message to commit."

  git push or git push origin main
  ```

## Prerequisites

Before of using this application, is require to install dependencies, run the following command in your terminal:

  ```
  npm i
  ```

## Test

To run tests, run these commands:

  ```
  npm test
  ```

[Back To Top](#team-profile-generator)

---


  ## Usage

  This is a open source program, feel free to use it, contact me to request features
    

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Derimarg/team-profile-generator/issues) for a list of proposed features (and known issues).

[Back To Top](#team-profile-generator)

---

<!-- CONTRIBUTORS -->
## Contributing

Contributions are part of this open source project. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/name-of-feature`)
3. Commit your Changes (`git commit -m "Add some feature"`)
4. Push to the Branch (`git push origin feature/name-of-feature`)
5. Open a Pull Request



## Questions

For additional help or questions about collaboration, contact me at: charminvidal@gmail.com

- GitHub - [Derimarg](https://github.com/Derimarg/)

- Linkedin - [Derimar Gray](https://www.linkedin.com/in/derimar-gray-676275132/)
- Project Repository Link: https://github.com/Derimarg/team-profile-generator
- Walkthrough video link: https://drive.google.com/file/d/1KKqqR7dyTjwi98L1fbJG8xMbcPeMMjwl/view?usp=sharing

[Back To Top](#team-profile-generator)

---


## License

MIT License

Copyright (c) 2021 Derimar Gray

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  

[repo-size]: https://img.shields.io/github/repo-size/Derimarg/team-profile-generator?style=for-the-badge
[GitHub-language]: https://img.shields.io/github/languages/top/Derimarg/team-profile-generator?color=yellow&style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/Derimarg/team-profile-generator.svg?style=for-the-badge
[contributors-url]: https://github.com/Derimarg/team-profile-generator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Derimarg/team-profile-generator.svg?color=9cf&style=for-the-badge
[forks-url]: https://github.com/Derimarg/team-profile-generator/network/members
[stars-shield]: https://img.shields.io/github/stars/Derimarg/team-profile-generator.svg?color=blueviolet&style=for-the-badge
[stars-url]: https://github.com/Derimarg/team-profile-generator/stargazers
[issues-shield]: https://img.shields.io/github/issues/Derimarg/team-profile-generator.svg?style=for-the-badge
[issues-url]: https://github.com/Derimarg/team-profile-generator/issues
[license-shield]: https://img.shields.io/static/v1?label=license&message=MIT&color=yellowgreen.svg&style=for-the-badge


[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/derimar-gray-676275132/
  