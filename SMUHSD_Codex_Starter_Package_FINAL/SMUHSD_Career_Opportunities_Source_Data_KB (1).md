# SMUHSD Career Opportunities — Actual Source Data Knowledge Base

This markdown file is intended to be used as source data for a future student-facing web/iOS application. It preserves actual opportunity data from the uploaded district files, including row-level spreadsheet data and page-level PDF flyer data.

## Source Files
- `Career Center Opportunities 2025 2026.pdf` — career center slide deck / flyer collection
- `SMUHSD Career Center Opportunities.xlsx` — internship, volunteer, job board, and career event spreadsheets
- `Career Training Programs.xlsx` — career pathway and training program spreadsheets
- `Career Exploration - Planning Your Future-  2024.docx` — student career exploration worksheet

## Import Notes for App Builder
- Treat each `record_id` as stable only for this extraction run; use title + organization + source row/page for deduping.
- Spreadsheet rows are generally more structured and should be imported as canonical records where available.
- PDF pages often contain flyer-only details, QR-code references, and links; use them as enrichment records or unstructured evidence.
- SMUHSD disclaimers repeatedly state that inclusion is not an endorsement or recommendation.
- Dates, deadlines, and availability are time-sensitive and should be verified before exposing as active opportunities.

---

## Student Career Exploration Workflow Source

Name Date

Planning Your Future- Career Exploration

View Careers that match your interests. List the 3 careers below!

Research

After researching your top three interests, select one to research more in-depth on the internet.

Learn ABOUT your selected CAREER- Find a VIDEO online. “A Day in the Life of………………………” (Youtube)

Job Description

Find a job description of your chosen career. Some websites to look at: Indeed.com, Craigslist.com,

Simplyhired.com, monster.com, snagajob.com

Training required for this Career

### Worksheet Table 1
- Set up an account or log into California Colleges - californiacolleges.edu 
Use your school email address 
Log in with Google 
Go to Career > Interest Profile - Career Assessment

 SCROLL DOWN, TAKE THE ASSESSMENT, AND GET STARTED! | Set up an account or log into California Colleges - californiacolleges.edu 
Use your school email address 
Log in with Google 
Go to Career > Interest Profile - Career Assessment

 SCROLL DOWN, TAKE THE ASSESSMENT, AND GET STARTED!

### Worksheet Table 2
- Interest Profiler Results | Interest Profiler Results | Interest Profiler Results | Interest Profiler Results | Interest Profiler Results | Interest Profiler Results
- What are your two highest interests? (Realistic, Investigative, Artistic, Social, Enterprising & Conventional) | What are your two highest interests? (Realistic, Investigative, Artistic, Social, Enterprising & Conventional) | What are your two highest interests? (Realistic, Investigative, Artistic, Social, Enterprising & Conventional) | What are your two highest interests? (Realistic, Investigative, Artistic, Social, Enterprising & Conventional) | What are your two highest interests? (Realistic, Investigative, Artistic, Social, Enterprising & Conventional) | What are your two highest interests? (Realistic, Investigative, Artistic, Social, Enterprising & Conventional)
- Highest Interest |  | Highest Interest |  | Highest Interest | 
- What does this mean? | What does this mean? | What does this mean? | What does this mean? | What does this mean? | What does this mean?

### Worksheet Table 3
- 1. | 2. | 3.

### Worksheet Table 4
- The CAREER I chose based upon the Interest Profiler Results or my interests.

### Worksheet Table 5
- Title of VIDEO- | What did you LEARN?

### Worksheet Table 6
- What are the job requirements? 

_____________________________________________________________________________________________

What does the job pay? - Pay Range | What are the job requirements? 

_____________________________________________________________________________________________

What does the job pay? - Pay Range | What are the job requirements? 

_____________________________________________________________________________________________

What does the job pay? - Pay Range

### Worksheet Table 7
- List 2 Schools/Programs that offer the Training Program/Major/Apprenticeship | List 2 Schools/Programs that offer the Training Program/Major/Apprenticeship | List 2 Schools/Programs that offer the Training Program/Major/Apprenticeship | List 2 Schools/Programs that offer the Training Program/Major/Apprenticeship
- 1. | 1. | 1. | 2.

### Worksheet Table 8
- Admission Requirements | Cost of Program | Plan for Financing

### Worksheet Table 9
- How long will the program take to complete? | Summarize the steps you will need to take to complete the Training. | Summarize the steps you will need to take to complete the Training.

---

## PDF Slide / Flyer Source Data

### PDF Page 1: SMUHSD Career Opportunities 2025-2026

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 1
- extracted_links:
  - https://docs.google.com/spreadsheets/d/1IZYkYcscggsqbl4QFZuvOrxjIa80jTAiupCtPg1dBCA/edit#gid=211762174
  - https://www.smuhsd.org/Page/3561
  - https://docs.google.com/document/d/10RPkMU4SWdj6MhFfhvoU1p5RoFXj3dUIT14LH-Sl79Y/edit
  - https://docs.google.com/spreadsheets/d/138lPswLJE8eiyqPExnwRdzNnybt9uIlDeNfbbwSc_s0/edit?usp=sharing
  - https://www.smuhsd.org/Page/12073
  - https://docs.google.com/document/d/1VGbp3QUG657CLJmBBUnAVi7RPjzQuBTaYLeClcwSstY/edit?usp=sharing
  - https://docs.google.com/spreadsheets/d/1IZYkYcscggsqbl4QFZuvOrxjIa80jTAiupCtPg1dBCA/edit#gid=1246146056
  - http://bit.ly/careercenteropps
  - https://docs.google.com/presentation/d/1IS9mNlr2i3lLDVCmYCR6KxzgcSXk5S7zOeyDNsudhb4/edit?pli=1&slide=id.g1443fafbb89_17_136#slide=id.g1443fafbb89_17_136

```text
SMUHSD Career Opportunities 2025-2026
Career Exploration Opportunities
Click on any topic to go to that section. Additional links/resources will be added when available.
https://docs.google.com/presentation/d/1IS9mNlr2i3lLDVCmYCR6KxzgcSXk5S7zOeyDNsudhb4/edit#slide=i
d.gb97f6ee00a_8_0
Career Programs &
Opportunities
Internship Opportunity Spreadsheet
Jobs
Work Permit Application
Resume Resources & Templates
Career Training Programs
Career Training Programs Spreadsheet
Community College Career Pathway
Presentations
Workshops
Career Exploration
Stay in the Bay with 100k
Resources
Virtual Career Events and Job Shadows and
Job Shadows
Financial Literacy
Volunteering
Volunteering Opportunity Spreadsheet
http://bit.ly/careercenteropps
```

### PDF Page 2: District Career Coordinators

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 2
- extracted_links:
  - mailto:Qhua@smuhsd.org
  - mailto:Chermann@smuhsd.org
  - mailto:jreyes@smuhsd.org
  - mailto:hschang@smuhsd.org
  - mailto:kkoivisto@smuhsd.org

```text
District Career Coordinators
Contact your Career Coordinator with any questions
Aragon High School
Queenie Hua
Qhua@smuhsd.org
Burlingame High School
Carrie Hermann
Chermann@smuhsd.org
Capuchino High School
Hillsdale & Mills
High School
Jerel Reyes
jreyes@smuhsd.org
San Mateo School
Sun Chang
hschang@smuhsd.org

Peninsula High School
Chris Zografos
czografos@smuhsd.org
Kim Koivisto
kkoivisto@smuhsd.org
```

### PDF Page 3: Career Exploration, Contests & Events

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 3
- extracted_links:
  - https://docs.google.com/document/d/1VGbp3QUG657CLJmBBUnAVi7RPjzQuBTaYLeClcwSstY/edit?usp=sharing

```text
Career Exploration, Contests &  Events
Click on any topic to go to that section. Additional information/resources will be available later in the year.
Virtual Career Events
Flyers
Financial Literacy
Resources
TalkShop
```

### PDF Page 4: Career Inventory

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 4
- extracted_links:
  - https://www.californiacolleges.edu/#/
  - https://docs.google.com/document/d/18oAffZvRpWo-_lJuoua9HiwBPspBnvCvVA4Nx0-6zno/edit

```text
Career Inventory
Set up an account or log into California Colleges - californiacolleges.edu
1.
Use your school email address
2.
Log in with Google
➢
Go to Career > Interest Profile - Career Assessment
Optional worksheet to guide you through the career assessment process.
Self-assessments can help you know yourself better. Knowing yourself better can help you choose a satisfying career field to explore.
```

### PDF Page 5: Stewardship event with The Marine Mammal Center

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 5
- extracted_links:
  - https://docs.google.com/presentation/d/15W9u0qji7BHPW7YrSpzh-pUZEYKAsoulw22G-VeBNqw/edit?usp=sharing
  - http://bit.ly/stthursjune26
  - http://bit.ly/careercenteropps

```text
Stewardship event with The Marine Mammal Center
Our first June Stewardship event for high school aged youth will be on 6/18/26.
●
If you want to share this event with anyone, we have made flyers!
○
Note: these events are designed for high schoolers
interested in meeting other high schoolers who want to learn
about/engage more with conservation work.
●
Theme: Experiencing Fish Kitchen
●
Event Registration Link: bit.ly/stthursjune26
●
When: Thursday, June 18th, from 11:30-4:15
●
Where: The Marine Mammal Center (Sausalito)
●
Cost: FREE (free light lunch and snacks will be provided)
●
Description: Join The Marine Mammal Center for an exclusive
behind-the-scenes opportunity where you will have the chance to
support our hard-working volunteer crews. We will be preparing food for
our marine mammal patients and upkeeping kitchen sanitization tasks,
allowing you a glimpse into what it is like to be one of our committed
animal care volunteers. Our hope is that you leave this event with an
increased understanding of patient needs, and some goals for what you
can do to support our ocean
●
We sign community service hours for youth if needed!
Please make sure interested youth register before the event! If the event is full,
we encourage youth to sign up for the waitlist as spaces may become
available!
Date posted: 5/20/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement
or recommendation by SMUHSD
```

### PDF Page 6: Aviation Day: San Francisco

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 6
- extracted_links:
  - http://bit.ly/careercenteropps

```text
Aviation Day: San Francisco
Welcome to San Francisco’s third annual Aviation Day!
Get ready to explore the skies – and the many careers that make
aviation take flight.
Aviation Day is designed to spark curiosity and inspire the next
generation of aviation professionals from across our local
communities. Whether you’re dreaming of the flight deck or
curious about what happens behind the scenes, this hands-on
event introduces young people to both expected and unexpected
career paths in aviation.  From pilots and engineers to tech
innovators, operations leaders, and customer experience pros,
attendees will discover the many educational pathways that can
launch a future in this dynamic industry.
Please visit the link below for registration information:
https://docs.google.com/forms/d/e/1FAIpQLSdHvPCMZoC
wPbBg3RHYMwXFt9GzQxIGPw9LzdEdOi1sBkUfbw/viewf
orm?usp=publish-editor
June 6, 2026
10 a.m. – 2:30 p.m.
Ages 10-18 | Free Community Event
San Francisco International Airport
West Cargo Rd.
San Francisco, CA 94128
Date posted: 5/4/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 7: Do you know a young woman who is a rising freshman,

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 7
- extracted_links:
  - https://community.womeninbio.org/admin-portal/email-engine/link/MTMwNzkxMy0zY2VhNjdRRFJDc1U=/23/7ythiG---plus---YVfuP4pqrVjiAvyVkv0r2Ei0MVdRFv4mvDr423BbwTDnbpUFLKnvrZh72TCDzNxaqgL1jkik6XtlmilAnqV54zjWGAKaEESEpMcWSdZvCYCwrmD9456zanHFKdMTYFLbzm1tqB2nniUwkv9SuonIY4ANSInO01NOq---plus---bg---equals---
  - https://my.reviewr.com/s2/site/YWIBAmbassador2026
  - http://bit.ly/careercenteropps

```text
Do you know a young woman who is a rising freshman,
sophomore, or junior in high school and has a passion for STEM?
Applications are now open for our YWIB Ambassador Program!
Learn more.  Applications for the 2026-2027 cohort will be open
May 4th to June 4th, 2026.
Each school year, YWIB welcomes approximately 20 students to
the new class of Ambassadors.  Two Ambassadors are typically
chosen from the San Francisco Bay Area region.  Follow this direct
link for the YWIB Ambassador application.
Date posted: 5/4/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 8: Date posted:

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 8
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://cityofsanmateo.org/DocumentCenter/View/103939/Youth-Commissioner-Application-2026---Updated-033126

```text
Date posted:
4/10/26 QH
http://bit.ly/care
ercenteropps
Note: The
inclusion of a
career
opportunity in
this document
is not an
endorsement or
recommendation
by SMUHSD
City of San
Mateo has
several Youth
Commissioner
opportunities.
Teens between
the ages of 13
and 17 who live
or study in the
City of San
Mateo may
submit a Youth
Commissioner
Application* and
resume to the
City Clerk at
clerk@cityofsan
mateo.org
```

### PDF Page 9: The Academy’s Pre-College Art & Design Experience

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 9
- extracted_links:
  - https://sss.academyart.edu/psc/SSS/EMPLOYEE/SA/c/CY2_LOGIN_MENU.CY2_LOGIN_FL.GBL&cmd=start?CAMPUS_URL=https%3a%2f%2fsss.academyart.edu%2fpsp%2fSSS%2fEMPLOYEE%2fSA%2fs%2fWEBLIB_SCC_NUR.SCC_SS_GATEKEEPER.FieldFormula.IScript_SCC_GateKeeper%3fSCC_APPL_CONTXT_ID%3dSCC_NURCTXT_20220418211926&comm_key_4=PURE&universal_lead_id=0741CAE4-CD31-C33C-3642-9DB6419B0008&referrer_url=https%3A%2F%2Fwww.academyart.edu%2Facademics%2Fpre-college%2F&
  - http://bit.ly/careercenteropps

```text
The Academy’s Pre-College Art & Design Experience
(PCADE) is a free, college-level program for high school
students ready to explore what makes their creative
perspective one of a kind.
Whether you’re just beginning or already building your
portfolio, this is where you’ll stretch your thinking and
sharpen your style in animation, game design, fashion, fine
art, photography, filmmaking, and more. Classes are held
primarily onsite in San Francisco.
APPLY HERE
Date posted: 4/13/26 JR
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
Pre-College Art & Design @
Academy of Art University
```

### PDF Page 10: San Mateo County’s Youth Voting Advisory Committee

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 10
- extracted_links:
  - https://docs.google.com/forms/d/e/1FAIpQLSc98nMlaA3Lq0z-5lMtGuPxBNDwek9OsLKYbQRcD8gZML2E-g/viewform?usp=dialog
  - http://bit.ly/careercenteropps

```text
San Mateo County’s Youth Voting Advisory Committee
(YVAC)  works to increase youth voter registration,
pre-registration, and civic engagement across the
county.
As part of our efforts to strengthen youth civic
engagement, we have created a brief survey to better
understand high school students’ civic involvement
and the potential barriers they face in participating in
the elections process.
Click here for survey
Date posted: 3/02/26  KK
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or
recommendation by SMUHSD
```

### PDF Page 11: This is a great opportunity for students who are

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 11
- extracted_links:
  - https://forms.gle/ESvPdGAQLb979Yxz9
  - https://www.acscanemergingleaders.org/about
  - https://drive.google.com/file/d/13egLpllBkkNQxwiyhjmsSP5H0RoX3JIP/view
  - https://acscanemergingleaders.slack.com/files/U09UY9HAPLG/F0A5R2R07R7/img_6108.png
  - http://bit.ly/careercenteropps

```text
This is a great opportunity for students who are
interested in health, policy/law, advocacy, or community
service. SEL members can gain leadership and
advocacy experience, learn about cancer-related policy
efforts, and participate in local events and awareness
campaigns. Interested students can learn more by
viewing the website/flyer linked below and get involved
by filling out our interest form. Students are welcome to
email acscancaliforniasel.outreach@gmail.com with any
questions.
SEL Interest Form:
https://forms.gle/ESvPdGAQLb979Yxz9
SEL Website:
https://www.acscanemergingleaders.org/about
SEL Flyer:
https://drive.google.com/file/d/13egLpllBkkNQxwiyhjms
SP5H0RoX3JIP/view
Upcoming Bioinformatics Training Camp:
https://acscanemergingleaders.slack.com/files/U09UY9H
APLG/F0A5R2R07R7/img_6108.png
Date posted: 1/6/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 12: Free CPR Certiﬁcation Class

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 12
- extracted_links:
  - http://bit.ly/careercenteropps

```text
Free CPR Certiﬁcation Class
Stanford Health Care Center for Education and
Professional Development
●
All courses held at the Center for Education and Professional
Development, 1850 Embarcadero Road, Palo Alto
●
Courses will provide an overview of how to respond in an
emergency and important information that can save a life
Limited spots available. Register - QR Code
Date posted: 12/8//25 CH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or recommendation by SMUHSD
```

### PDF Page 13: Explore Aviation

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 13
- extracted_links:
  - https://www.eaa.org/eaa/youth/free-ye-flights
  - https://www.eaa20.org/join-chapter-20.html
  - http://bit.ly/careercenteropps

```text
Explore Aviation
Young Eagles is an EAA program that
gives youths between the ages of 8 and
17 an opportunity to experience their ﬁrst
ﬂight in a general aviation airplane for
free.
Apply to be a Young Eagles
here!
Date posted:01/09/2025 NK
http://bit.ly/careercenteropps
Note: The inclusion of an opportunity in this
document is not an endorsement or
recommendation by SMUHSD
```

### PDF Page 14: 01/25/24- QH

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 14
- extracted_links:
  - http://tinyurl.com/smyca

```text
01/25/24- QH
Note: The inclusion of an opportunity in
this document is not an endorsement
or recommendation by San Mateo
Union High School District.
San Mateo Youth
Climate Action
For more information, go to
tinyurl.com/smyca
```

### PDF Page 15: TalkShop

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 15
- extracted_links:
  - https://anchor.fm/helen-obrien
  - https://talkshoppodcast.com/
  - https://www.facebook.com/TalkShopPodcast-105534581166487/
  - https://www.instagram.com/TalkShop.Podcast/
  - https://open.spotify.com/show/2vSnBmD2VEGBt6gVMdLSOU
  - https://podcasts.apple.com/us/podcast/talkshop-podcast/id1520403617
  - https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yODQxNTA4Yy9wb2RjYXN0L3Jzcw==

```text
TalkShop
Podcast
With episodes discussing
 jobs & career paths in which
you do not necessarily need a
4-year college degree
❏
Guests include: electrician, flight
attendant, diesel mechanic, plumber,
sheet metal worker, home inspector,
among others
❏
Learn about their story, the benefits from
the job, and how you can get involved
❏
Fabulous insight from high school
graduates
Facebook: Talkshop.podcast
Instagram: Talkshop.podcast
Scroll to next slide to
see Career
Exploration
Opportunities
Note: The inclusion of an opportunity in
this document is not an endorsement or
recommendation by San Mateo Union
High School District.
```

### PDF Page 16: Programs & Opportunities

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 16
- extracted_links:
  - http://bit.ly/3P0VJJ1
  - https://docs.google.com/document/d/1-DVGi54-za_BhENJgru_2tFzflyIp4jDQIbamNr7kic/edit#heading=h.18isf3l062tj

```text
Programs & Opportunities
Click on any topic to go to that section. Additional information/resources will be added later in the school year.
Internships & Programs
 Flyers
What is an Internship?
```

### PDF Page 17: Silicon Valley Youth Climate Action

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 17
- extracted_links:
  - https://www.svyouthclimateaction.org/
  - https://www.smcoe.org/
  - http://tinyurl.com/smcinterclimate26
  - http://bit.ly/careercenteropps

```text
Silicon Valley Youth Climate Action
Intergenerational Climate Roundtable
July 11, 2026, 9:00 am - 1:00 pm
Hosted by Silicon Valley Youth Climate Action and the San Mateo County
Oﬃce of Education, the ﬁrst-ever San Mateo County Intergenerational
Climate Roundtable will bridge the gap between one hundred and ﬁfty
youth and adults through structured discussion on Clean Energy, Air
Quality, Single-Use Plastics, and AI Data Centers. Attendees connect with
projects and policies, and author a community strategy around these issues
with participating organizations.
●
When: Saturday, July 11th  |  9:00AM – 1:00PM
●
Where:  San Mateo County of Education Oﬃce at 101 Twin
Dolphin Dr., Redwood City
●
Registration: Available for free at tinyurl.com/smcinterclimate26.
Date posted: 5/20/26 CH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or
recommendation by SMUHSD
```

### PDF Page 18: San Mateo Arboretum Society

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 18
- extracted_links:
  - mailto:Info@sanmateoarboretum.org
  - http://bit.ly/careercenteropps

```text
San Mateo Arboretum Society
2026 Summer Internship Program
We currently have 2 interns who will be working on the
woodworking and Japanese Garden documentary projects (ie
those positions are filled).
We are looking for up to 2 additional interns for this
summer.
Internships require 10-20 hours per week and the start and end
dates are flexible, depending on the opportunity.
To apply, contact us at: Info@sanmateoarboretum.org
We also offer volunteer opportunities during the year in our
Nursery and Greenhouse.
Contact us to find out more!
Date posted: 5/8/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 19: We are currently seeking a Project and Research

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 19
- extracted_links:
  - http://bit.ly/careercenteropps

```text
We are currently seeking a Project and Research
Intern to support our team on critical project work.
This role offers valuable hands-on experience
and the opportunity to develop communication,
research, and project support skills.
We are looking for a high school senior or recent
graduate interested in gaining office experience
through a flexible summer position. This is a paid
internship starting around mid-May, with an
expected commitment of approximately 10–20
hours per week.
Date posted: 4/10/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 20: San Mateo Police Department

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 20
- extracted_links:
  - https://www.cityofsanmateo.org/2813/Police-Explorer-Program
  - https://www.cityofsanmateo.org/FormCenter/Police-Department-4/Join-SMPD-Recruitment-Interest-Form-76
  - http://bit.ly/careercenteropps

```text
San Mateo Police Department
Explorer Program
All grades can apply
Application process is ongoing!
Learn more about the program here!
If you are interested in joining complete
the interest form!
Template -
duplicate
slide and
move to
the top
Link to these slides: http://bit.ly/careercenteropps
Note: The inclusion of an opportunity in this document is not an
endorsement or recommendation by San Mateo Union High School
District.
Back to table of contents
```

### PDF Page 21: Job Opportunities

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 21
- extracted_links:
  - https://www.smuhsd.org/students/student-support-and-information/work-permits
  - https://docs.google.com/spreadsheets/d/1IZYkYcscggsqbl4QFZuvOrxjIa80jTAiupCtPg1dBCA/edit#gid=0
  - https://docs.google.com/document/d/1DUyNeScJbPf7iRCR-5hDgFHl334GOTLm7ycS50dOiiE/edit?usp=sharing
  - https://docs.google.com/document/d/10RPkMU4SWdj6MhFfhvoU1p5RoFXj3dUIT14LH-Sl79Y/edit?usp=sharing
  - https://www.indeed.com/career-advice/interviewing/what-to-wear-to-an-interview-teenager

```text
Job Opportunities
Click on any topic to go to that section
Work Permit Application
Job Opportunity
Spreadsheet
Jobs Flyers
What you need to know
when you get a job!
Resume & Interviewing
Tips
Dressing for the
Interview
```

### PDF Page 22: bit.ly/4hTKBNM

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 22
- extracted_links:
  - http://bit.ly/4hTKBNM
  - http://bit.ly/3UUs9La
  - http://bit.ly/4g2ZU51
  - http://bit.ly/3Zj7bIo
  - http://smuhsd.org/workpermits
  - http://bit.ly/4fxarph

```text
bit.ly/4hTKBNM
bit.ly/3UUs9La
bit.ly/4g2ZU51
bit.ly/3Zj7bIo
smuhsd.org/
workpermits
bit.ly/4fxarph
```

### PDF Page 23: San Mateo County Supervisor Lisa

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 23
- extracted_links:
  - https://www.governmentjobs.com/careers/sanmateo/jobs/newprint/5323353
  - http://bit.ly/careercenteropps

```text
San Mateo County Supervisor Lisa
Gauthier, representing District 4, is looking
for a year-round intern to perform a
variety of administrative and social media
functions in her District Office.
Interns will gain on-the-job experience
under the guidance of the Supervisor and
her office of Legislative Aides.
Qualifications:
To apply, the following criteria must be met:
Must be eligible to work in the United States
Must be 18 years of age or older
Must possess a high school diploma or educational
equivalent.
Must successfully pass a thorough background
investigation prior to employment.
LOCATION County of San Mateo, CA
DEPARTMENT Board of Supervisors
SALARY $23.24 - $29.05 Hourly
Work Schedule: This is an onsite role, with up to five
in-office days per week as determined by work needs and
scheduled by your supervisor.
See more details:
https://www.governmentjobs.com/careers/sanmateo/jobs/n
ewprint/5323353
Date posted: 5/15/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 24: 2026 Legarza Summer Camp

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 24
- extracted_links:
  - https://docs.google.com/forms/d/e/1FAIpQLSfxFLIuazMQNOXKlpTKfV083C3TiEfqLwNL1rrwFbXmSKJJ-A/viewform
  - http://bit.ly/careercenteropps

```text
2026 Legarza Summer Camp
Job
NEW SUMMER APPLICANTS
Looking for a Job that is Fun, Challenging and Rewarding at the
same time?
While some might call you a counselor, teacher, or childcare
specialist, we know that those titles are too limiting for the role
you’ll take on this summer with Legarza. We call you coach, in
the sense of the original deﬁnition – a vehicle to take a person
from where they are to where they want to be. What’s important
to us is how you engage with our campers, families, and fellow
staff members.

We have a variety of ways you can spend your time at camp
and build marketable skills for your resume at the same time.
You'll gain experience in group management, communication,
teamwork, and conﬂict resolution, all while forming lifelong
friendships, experiencing what it's like to have your very own
fan club (every staff member has one) and being part of a
program that's reinventing camps for the modern era.
While it is considered a job, you won’t believe you’re getting
paid for this!
Available Camps (Note: Not every camp is available in every location
every week):
All-Sports, Baseball, Basketball, Cooking, Crafts, Soccer, STEAM
(Science, Tech, Engineering, Art, Math), Volleyball
Pay Scales in CA:
Coaches: starting at $17.50/hour
Directors: $18-$20/hour
Application link:  2026 Legarza Summer Camp Job Application
Questions? Please contact: Jobs@LegarzaSports.org / 415-334-3333
Date posted: 5/8/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 25: La Petite Baleen is now

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 25
- extracted_links:
  - https://www.swimlpb.com/career-opportunities
  - http://bit.ly/careercenteropps

```text
La Petite Baleen is now
hiring for swim
teachers and they are
hiring at all 5 of their
schools.
Learn more and apply
here:
https://www.swimlpb.com/career-opportun
ities
Date posted: 4/9/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 26: Spirited Play Labs, an inclusive play space for young

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 26
- extracted_links:
  - https://spiritedplaylabs.com/spl-careers/
  - http://bit.ly/careercenteropps

```text
Spirited Play Labs, an inclusive play space for young
children and their families. Many of the children who visit
our space are disabled or neurodivergent.
Beginning in June, we are running our Summer Hangouts
program and are looking for high school student volunteers
to help support our staff and engage with children through
play and activities. It’s a great opportunity for students
interested in child development, education, psychology, or
pediatric therapy.
We are also hiring Summer Camp Support Staff.
Students who are 16 or older are welcome to apply
for this paid position if they’re interested in working
with us this summer.
Support Staff Paid position application:
https://spiritedplaylabs.com/spl-careers/
Date posted: 3/9/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 27: KE Camps operate summer day camp programs at country clubs

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 27
- extracted_links:
  - https://www.canva.com/design/DAG-gxpDvHE/izXpdW6leXm4Mq4EwgDeFA/view?utm_content=DAG-gxpDvHE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h564d446af8
  - https://www.canva.com/design/DAG-hLy3TbU/szDMtEutTACwlKItMv6SwQ/view?utm_content=DAG-hLy3TbU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd19e1255d8
  - https://www.canva.com/design/DAG74fZCR9I/ElK7WItM2j0-8OohYUC1PQ/view?utm_content=DAG74fZCR9I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha69be26bce
  - mailto:racquel@kecamps.com
  - http://bit.ly/careercenteropps

```text
KE Camps operate summer day camp programs at country clubs
all across the United States.
KE Camps will be hiring for positions at the Green Hills Country
Club, Los Altos Golf & Country Club, and the Peninsula Golf &
Country Club.
Joining our team offers an engaging environment for students to
thrive and build critical skills sought after by employers such as
creativity, problem solving, ﬂexibility, collaboration, organization,
planning, and communication.
Apply using the QR Code. Check out the next slide for other
locations.
Questions can be emailed to racquel@kecamps.com
Date posted: 2/4/26 CH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or recommendation by SMUHSD
KE CAMPS
```

### PDF Page 28: Untitled

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 28

```text
[No extractable text; refer to page image/flyer.]
```

### PDF Page 29: Date posted: 2/3/26 NK

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 29
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://forms.gle/rVfk6q2K4WhpsqzK6
  - https://forms.gle/zTdHzrzPMu3pCHhU6
  - https://forms.gle/Pws4oHTynq4ShtSK7

```text
Date posted: 2/3/26 NK
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an
endorsement or recommendation by SMUHSD
Code for Fun - is hiring!
Jobs & Internship
Volunteering:
https://forms.gle/rVfk6q2K4WhpsqzK6
Internship:
https://forms.gle/zTdHzrzPMu3pCHhU6
Job:
https://forms.gle/Pws4oHTynq4ShtSK7
```

### PDF Page 30: Date posted: 1/30/26 NK

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 30
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://www.pahgcc.com/

```text
Date posted: 1/30/26 NK
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in
this document is not an endorsement or
recommendation by SMUHSD
Camp Counselors needed @
Palo Alto Hills Golf & Country
Club!
Must be 15 yrs old
Send Resume & Cover Letter
to Holly Fletcher @
hfletcher@pahgcc.net
```

### PDF Page 31: Date posted: 1/30/26 NK

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 31
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://www.pahgcc.com/
  - mailto:hfletcher@pahgcc.net

```text
Date posted: 1/30/26 NK
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is
not an endorsement or recommendation by SMUHSD
Lifeguards need @ Palo Alto
Hills Golf & Country Club!
Send Resume & Cover Letter to
Holly Fletcher @
hfletcher@pahgcc.net
SEE LIFEGUARD TRAINING &
CPR TRAINING ON THE NEXT
SLIDE
```

### PDF Page 32: Date posted: 1/30/26 NK

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 32
- extracted_links:
  - http://bit.ly/careercenteropps

```text
Date posted: 1/30/26 NK
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or
recommendation by SMUHSD
CPR/AED/FIRST AID DATES
MARCH 12, 2026
SEPTEMBER 10, 2026
NOVEMBER 12, 2026
LIFEGUARD DATES
APRIL 11-12, 2026
APRIL 18-19, 2026
TRAINING DATES
```

### PDF Page 33: Date posted: 1/29/26 JR

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 33
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://www.calopps.org/san-mateo/job-20697172

```text
Date posted: 1/29/26 JR
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or
recommendation by SMUHSD
City of San Mateo:
Lifeguard
Starting pay: $20.06/hour
Season starts: June 9 - August 9
Applicants must be at least 15 years old. Candidates
must complete and pass the American Red Cross
Lifeguard Training course, including Cardiopulmonary
Resuscitation (CPR) and Automated External
Defibrillator (AED) certification, by June 1, 2026. While
not required, Water Safety Instruction (WSI)
certification is highly desirable.
APPLY HERE
```

### PDF Page 34: WONDERWORKS LAB

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 34
- extracted_links:
  - https://docs.google.com/forms/d/e/1FAIpQLScOpWl74A8QNah0Ws2F2_RlzZF7Xw6trLAkrNiZM4ossBBjXQ/viewform
  - http://bit.ly/careercenteropps

```text
WONDERWORKS LAB
Assistant STEM Instructor
Locations: Burlingame, Belmont, Millbrae
Compensation: $20-$25/Hour, depending on experience
Support fun, hands-on STEM classes for elementary
school aged children! Program blends science,
engineering and creativity through building kits and
activities.
APPLY HERE
Date posted: 1/6/26 JR
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or recommendation
by SMUHSD
```

### PDF Page 35: The Math Workshop

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 35
- extracted_links:
  - mailto:Themathworkshop@gmail.com
  - https://themathworkshop.us/contact-us/
  - http://bit.ly/careercenteropps

```text
The Math Workshop
Burlingame
Tutor Positions Available

Are you excited to teach and mentor students in grades K-8?
Tutoring positions are available with the Math Workshop located at
1812 Magnolia Avenue Suite B in Burlingame.
Email Themathworkshop@gmail.com to inquire.
Learn more and apply HERE. Please complete the Contact Us form
to inquire about tur
Date posted: 10/28/25 CH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or recommendation
by SMUHSD
```

### PDF Page 36: Gelataio (gelato shop)

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 36
- extracted_links:
  - https://docs.google.com/forms/d/e/1FAIpQLScP7NZPzjop9vyp_VFFD2ERGngoxFwkbRTElRnACob3x2zd1w/viewform
  - http://bit.ly/careercenteropps

```text
Gelataio (gelato shop)
San Carlos is hiring!
They are looking for 11th or 12th
grade students who are interested.
Please apply online if you are
interested.
Gelataio is located at
644 Laurel Street, Suite B, San
Carlos
Gelataio job application
Date posted: 1/21/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
 is not an endorsement or recommendation by SMUHSD
```

### PDF Page 37: The Carey School in San Mateo is looking

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 37
- extracted_links:
  - http://bit.ly/careercenteropps

```text
The Carey School in San Mateo is looking
for extended care leader positions. Please
use the following link to apply if you are
interested.
●
Position Type: Part Time, Non-Exempt,
School Year
●
Hours: 2-6pm; Some Evening Hours
●
Pay Range: $20-25 hourly, non-exempt
position
●
Link to apply:
https://thecareyschool.bamboohr.com/careers/68
Date posted: 9/25/25 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this
document
 is not an endorsement or recommendation by SMUHSD
```

### PDF Page 38: Shipman Swim School is

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 38
- extracted_links:
  - http://bit.ly/careercenteropps

```text
Shipman Swim School is
hiring for part-time
swimming instructor.
They are looking for
10th, 11th or 12th grade
students who are
interested. Please call
Zumer Shipman at
650-345-7946 to apply if
you are interested.
Date posted: 9/25/25 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
 is not an endorsement or recommendation by SMUHSD
```

### PDF Page 39: Therapy Stores

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 39
- extracted_links:
  - https://therapystores.com/pages/careers
  - http://bit.ly/careercenteropps

```text
Therapy Stores
Students can go to Therapy Stores Inc.com to
check us out and to apply. We have store locations
in both downtown San Mateo and Burlingame.
https://therapystores.com/pages/careers
Date posted: 9/17/25 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
 is not an endorsement or recommendation by SMUHSD
```

### PDF Page 40: San Mateo Foster City

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 40
- extracted_links:
  - https://www.edjoin.org/Home/JobPosting/1928081
  - http://bit.ly/careercenteropps

```text
San Mateo Foster City
School District
After School Job Opportunity
The San Mateo-Foster City School District is looking to hire high
school students to help support their after school program.
Although typical hours run between 2:00-6:00 pm, there is
ﬂexibility.
Learn more and apply at
https://www.edjoin.org/Home/JobPosting/1928081
Please ensure you create an account on EdJoin to access the
application.
Date posted: 9/5/25 CH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or
recommendation by SMUHSD
```

### PDF Page 41: To start the Work Permit Process, download the Request for Work Permit form that

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 41
- extracted_links:
  - https://www.smuhsd.org/students/student-support-and-information/work-permits
  - https://docs.google.com/document/d/1ifX-J53s7xIjTIJNu5ckgE_Tqvna6u37eFb4dOezxgU/edit?usp=sharing

```text
To start the Work Permit Process, download the Request for Work Permit form that
you, your parent/guardian and employer will need to complete.  Bring the
completed form to your school’s College & Career Center.  Please allow 2
business days from receipt of your completed form to pick-up your work permit.
Need a work
permit?
Check your school’s
website for
information on the
summer process.
FAQs
```

### PDF Page 42: Volunteering

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 42
- extracted_links:
  - https://docs.google.com/spreadsheets/d/1IZYkYcscggsqbl4QFZuvOrxjIa80jTAiupCtPg1dBCA/edit#gid=1246146056
  - https://teensvolunteer.org/volunteer-opportunities/?fwp_location=virtual

```text
Volunteering
Click on any topic to go to that section
Volunteering
Opportunity
Spreadsheet
Flyers
TeensVolunteer.org
```

### PDF Page 43: The Girls on the Run Bay Area Junior Coach program.

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 43
- extracted_links:
  - https://gotrbayarea-dot-yamm-track.appspot.com/2irR6ItKtB9vXXdOxbgjpFyj81it8-44DkyGZThQ0uVVj6nuongGu_iyswljNVOGGF-WuXgt9-nommt87SB2ydvijiKL7QASubFoWXwm1WbBiX7iVowtrZyeM_H1BLBujfChXdjXjGxZeL66gcjzZBvM3xKWBgXESxgbxlHue2_YQ-zCWdemcsOAqVy7j3e9ueeVrwA
  - http://bit.ly/careercenteropps

```text
The Girls on the Run Bay Area Junior Coach program.
Students (ages 16-18) can volunteer twice a week alongside a
Mentor Coach, serving as role models for younger girls in our
program. Junior Coaching is a great way to earn community
service hours and build leadership skills.
Our Fall season runs from the week of September 14th through
the Celebratory 5K on November 14th.
Interested students can apply and learn more at
www.gotrbayarea.org/junior-coach or email
programs@gotrbayarea.org.
Date posted: 6/9/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an
endorsement or recommendation by SMUHSD
```

### PDF Page 44: San Mateo Arboretum Society

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 44
- extracted_links:
  - mailto:Info@sanmateoarboretum.org
  - http://bit.ly/careercenteropps

```text
San Mateo Arboretum Society
2026 Volunteer Opportunities
We are looking for high school volunteers with our
local nonprofit at the San Mateo Arboretum
Society.
Come join us, show off your talents and level up
your skills while giving back to the community.
Work with SMAS volunteers on various projects
and opportunities during the year in our
Nursery and Greenhouse. Contact us to find out
more! Info@sanmateoarboretum.org
● Greenhouse propagation team
● Greenhouse weekend nursery sales
To apply, contact us at:
Info@sanmateoarboretum.org
Contact us to find out more!
Date posted: 5/25/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an
endorsement or recommendation by SMUHSD
```

### PDF Page 45: The staff at Highlands Elementary School

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 45
- extracted_links:
  - https://www.signupgenius.com/go/30E0A48AEA62CAAF85-64178108-2026#/
  - http://bit.ly/careercenteropps

```text
The staff at Highlands Elementary School
are looking for high school student
volunteers to help decorate for their 5th
Grade Promotion.
This volunteer opportunity qualifies for
service hours credit. Please see the
attached flyer for additional details and
sign-up information.
Sign up link:
https://www.signupgenius.com/go/30E0A
48AEA62CAAF85-64178108-2026#/
Date posted: 5/19/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this
document is not an
endorsement or recommendation by SMUHSD
```

### PDF Page 46: Do you want to become a Youth

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 46
- extracted_links:
  - http://bit.ly/careercenteropps

```text
Do you want to become a Youth
Referee as well as getting volunteer
hours? Anyone can become a referee,
and you would just need to complete
an online course and in person
training. Once you complete those,
you can begin refereeing, and there
are games every Saturday for fall and
spring seasons in Foster City, and
there are 8, 10, or 12 year old games
to referee. Students can reach out to
ref-team@ayso.org for more
information and look to become a ref.
We have an event coming up on
Friday, May 22 for in person training.
Date posted: 5/15/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an
endorsement or recommendation by SMUHSD
```

### PDF Page 47: Franklin Festival

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 47
- extracted_links:
  - https://docs.google.com/spreadsheets/d/1510_xQKyQd3fngDHxIf74OAJeEkiaaLFuGmQUhPhF9Y/edit?gid=0#gid=0
  - http://bit.ly/careercenteropps

```text
Franklin Festival
Volunteers Needed
June 6, 2026
Franklin Elementary is looking for enthusiastic student volunteers to help
make our annual Franklin Festival a success! This is a fantastic way to
earn community service hours while having a great time.
●
Date: June 6, 2026
●
Time: 11:00 AM – 2:00 PM (Check in 10 mins before arrival)
●
Location: Franklin Elementary School
●
Theme: American Cowboy
Volunteer Tasks Include:
●
Hosting and running carnival game stations
●
Monitoring play areas to ensure everyone is having fun safely
How to Sign Up: Ready to join the fun? Scan the QR Code or HERE on the
attached flyer to access the signup sheet. Spots are limited, so grab yours
soon!
Date posted: 5/14/26 CH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or recommendation by
SMUHSD
```

### PDF Page 48: Volunteer Opportunity

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 48
- extracted_links:
  - http://bit.ly/careercenteropps

```text
Volunteer Opportunity
Sunnybrae Elementary School
Flexible Schedule Available
Sunnybrae Elementary School is seeking volunteers to support their
summer school enrichment program. Volunteer hours are flexible.
●
June 16-July 17 (to be confirmed).
●
Flexible schedule between 8-12:30
●
Support  rising 4th and 5th graders across the district
●
Strengthen reading and math skills
●
Facilitate fun activities and support field trips
Date posted: 5/6/26 CH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an
endorsement or recommendation by SMUHSD
Volunteers will work with individuals and groups to help
develop skills.
Interested students can email Thao Le at
tle@smfc.k12.ca.us
```

### PDF Page 49: The San Mateo-Burlingame Auxiliary to the Lucille

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 49
- extracted_links:
  - http://bit.ly/careercenteropps

```text
The San Mateo-Burlingame Auxiliary to the Lucille
Packard Children’s Hospital at Stanford is a
volunteer group of about 50 women who raise
awareness and funding for the hospital. This is a
valuable event that increases awareness of the
life-saving services of the Lucille Packard Children’s
Hospital.  The financial contribution helps
perpetuate these services.
Our annual fundraiser is a Game Day at the
Immaculate Heart of Mary on Alameda De Las
Pulgas in Belmont.
We would like the help of 6-8 high school
volunteers to serve lunch and help at the event
from 10-2 pm on June 18 & 19, 2026.
This opportunity qualifies for community service
hours.
Sign up by emailing: kathryn.breaux@gmail.com
Date posted: 5/1/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 50: Spirited Play Labs, an inclusive play space for

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 50
- extracted_links:
  - https://forms.gle/JcNoM4GqKCJ7Bt3Z8
  - http://bit.ly/careercenteropps

```text
Spirited Play Labs, an inclusive play space for
young children and their families. Many of the
children who visit our space are disabled or
neurodivergent.
Beginning in June, we are running our Summer
Hangouts program and are looking for high school
student volunteers to help support our staff and
engage with children through play and activities.
It’s a great opportunity for students interested in
child development, education, psychology, or
pediatric therapy.
Volunteer Application:
https://forms.gle/JcNoM4GqKCJ7Bt3Z8
Date posted: 3/9/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 51: Program highlights for students include:

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 51
- extracted_links:
  - https://www.gotrbayarea.org/junior-coach
  - http://bit.ly/careercenteropps

```text
Program highlights for students include:
●
Structured, supervised way for students to earn verified
community service hours applicable to school or graduation
requirements
●
Building leadership, teamwork, and communication skills
●
Exposure to youth development, health, and nonprofit work
●
Making a meaningful impact in their local community
Time Commitment:
Approximately 4 hours per week for an 8-week season
Location:
The closest location to your school with a team is Parkside Elementary.
Junior Coach requirements:
●
Must be a current high school student, age 16 - 18
●
Commit to attending practices - two hours, twice per week; total
of 4 hours per week
●
Complete a Junior Coach application and training requirements
the application can be found here:
https://www.gotrbayarea.org/junior-coach
Date posted: 2/4/26 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 52: Date posted: 2/3/26 NK

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 52
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://forms.gle/rVfk6q2K4WhpsqzK6
  - https://forms.gle/zTdHzrzPMu3pCHhU6
  - https://forms.gle/Pws4oHTynq4ShtSK7

```text
Date posted: 2/3/26 NK
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document is not an endorsement or
recommendation by SMUHSD
Code for Fun - is in need
of Volunteers
Volunteering:
https://forms.gle/rVfk6q2K4WhpsqzK6
Internship:
https://forms.gle/zTdHzrzPMu3pCHhU6
Job:
https://forms.gle/Pws4oHTynq4ShtSK7
Learn more here!
```

### PDF Page 53: ●

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 53
- extracted_links:
  - https://www.pacificbeachcoalition.org/student/
  - http://bit.ly/careercenteropps

```text
●
The PBC High School
Volunteer Opportunities are
geared toward high schoolers
who need community service
hours and/or might be
interested in joining our
ongoing Teen Site Captain
program. Teens must be in at
least 8th grade to be
considered for the site captain
program.
Date posted: 11/17/25 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 54: ●

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 54
- extracted_links:
  - http://bit.ly/careercenteropps

```text
●
The PBC Teen Community Service
Opportunities are geared toward all
students. All ages are welcome at
our events. Parents or guardians
are required to sign waivers for
children under the age of 18.
Date posted: 11/17/25 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 55: Age-Up Ombudsman Services of San Mateo County. One

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 55
- extracted_links:
  - http://bit.ly/careercenteropps

```text
Age-Up Ombudsman Services of San Mateo County. One
of the key initiatives we support is partnering with local
schools to bring the joy of music and arts to our older
adult population.
One of our goals is to arrange student volunteers to visit
our senior facilities and perform volunteer music recitals
for the residents.

Some of the benefits for the volunteers are; community
service credit, recommendation letter, or verification letter
for college, and bringing smiles to residents.
For questions, please feel free to contact me or Bethany
Dinh at 650-780-7514 or bethany@age-up.org.
Date posted: 10/31/25 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 56: Age-Up Ombudsman Services of San Mateo County. One of

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 56
- extracted_links:
  - http://bit.ly/careercenteropps

```text
Age-Up Ombudsman Services of San Mateo County. One of
the key initiatives we support is partnering with local schools
to bring the joy of music and arts to our older adult
population.
One of our goals is to arrange student volunteers to visit our
senior facilities and perform volunteer music recitals for the
residents.

Some of the benefits for the volunteers are; community
service credit, recommendation letter, or verification letter for
college, and bringing smiles to residents.
For questions, please feel free to contact me or Bethany
Dinh at 650-780-7514 or bethany@age-up.org.
Date posted: 10/31/25 QH
http://bit.ly/careercenteropps
Note: The inclusion of a career opportunity in this document
is not an endorsement or recommendation by SMUHSD
```

### PDF Page 57: Date posted:4/16/2025 NK

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 57
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://www.smchealth.org/smmc-volunteer

```text
Date posted:4/16/2025 NK
http://bit.ly/careercenteropps
Note: The inclusion of an opportunity in this document
is not an endorsement or recommendation by SMUHSD
San Mateo Medical Center is looking
for volunteers!
Apply here!
Year-Round application is open
year-round!
 If you have any questions, please don't hesitate to contact us.  We look
forward to speaking with you. Bee Alonso Program Coordinator I- Volunteer
Services (650)573-2797 balonso@smcgov.org
```

### PDF Page 58: Date posted:4/08/2025 NK

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 58
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://docs.google.com/forms/d/e/1FAIpQLScuRqa-RqaPfbFYdcS1nlZo84p7EnXRgDpsWdSpuHLODxjZ9w/viewform

```text
Date posted:4/08/2025 NK
http://bit.ly/careercenteropps
Note: The inclusion of an opportunity in this document
is not an endorsement or recommendation by SMUHSD
Students sign up to
volunteer for future
events and
opportunities to
volunteer year
round!
 Fill out an application today (DOC)!
```

### PDF Page 59: Date posted:01/09/2025 NK

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 59
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://www.smcsheriff.com/community-activities

```text
Date posted:01/09/2025 NK
http://bit.ly/careercenteropps
Note: The inclusion of an opportunity in this
document is not an endorsement or
recommendation by SMUHSD
San Mateo County
Explorers Law
Enforcement Post 810 or
Search & Rescue Post 830
(Critical times for this position is  three months
before the fall academy in September
(Summertime). Spring academy starts in
February!)
Learn more here!
Interested candidates can email:
smcsosarpost830@gmail.com or (650)488-1516
```

### PDF Page 60: Date posted:01/08/2025 NK 5/13 opps available

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 60
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://hiller.formstack.com/forms/flight_teen_volunteer_application

```text
Date posted:01/08/2025 NK 5/13 opps available
http://bit.ly/careercenteropps
Note: The inclusion of an opportunity in this document
is not an endorsement or recommendation by SMUHSD
Hiller Aviation Museum
needs Flight Teen
Volunteers!
Ongoing - Apply here!
```

### PDF Page 61: Date posted:8/12/2025 CH

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 61
- extracted_links:
  - http://bit.ly/careercenteropps
  - http://smhwc.org/

```text
Date posted:8/12/2025 CH
http://bit.ly/careercenteropps
Note: The inclusion of an opportunity in this document
is not an endorsement or recommendation by SMUHSD
Homework Central strives to create
educational equity for disadvantaged
elementary school students who aren’t
receiving the support they need.
Learn more at smhwc.org
```

### PDF Page 62: Second Harvest of Silicon Valley

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 62
- extracted_links:
  - http://bit.ly/careercenteropps
  - https://www.shfb.org/give-help/volunteer/volcalendar-general/?

```text
Second Harvest of Silicon Valley
Volunteers Needed
Date posted: 11/22/2024 5/13 Checked
http://bit.ly/careercenteropps
Note: The inclusion of an opportunity in this document is not
an endorsement or recommendation by SMUHSD
Volunteer Positions Available
Food loader (age 14)
Food sorter (age 12)
Drivers (age 18)
Find volunteer opportunities HERE
Sign Up to Volunteer | Second Harvest of Silicon Valley
```

### PDF Page 63: Samaritan House is in need

- source_file: `Career Center Opportunities 2025 2026.pdf`
- source_page: 63
- extracted_links:
  - https://samaritanhousesanmateo.org/volunteer/
  - http://bit.ly/careercenteropps

```text
Samaritan House is in need
of volunteers for their
kitchen pantry
Weekdays - 11 - 3pm & 1pm - 3pm
Weekends -  8am to 11am or 11am to 3pm
Must be 16 yrs
To learn more, click HERE
Place:  San Mateo
Updated: 5/13/25 CH
Link to these slides:
http://bit.ly/careercenteropps
Note: The inclusion of an opportunity in this document is not an
endorsement or recommendation by San Mateo Union High School
District
```

---

## Workbook Source Data: SMUHSD Career Center Opportunities

### Sheet: Internship Opportunities List

- source_file: `SMUHSD Career Center Opportunities.xlsx`
- sheet_name: `Internship Opportunities List`
- non_empty_rows: 43

- interpreted_header_row: 1

#### Source Row 1 (header/note)
- column_1: Organization
- column_2: Summer & Year Round
- column_3: Application Due Date
- column_4: Sign up for Future Details
- column_5: Internships & Programs & link to flyer
- column_6: Website/Email Address
- column_7: Requirements/Summary
- column_8: Paid/Unpaid

#### Category / Section: This resource will be updated when information is received regarding upcoming opportunities.

#### Record: *All deadlines and details are subject to change. Please notify your school site's Career Coordinator upon securing an internship.
- record_id: `internship-opportunities-list-row-4`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 4
- source_category: This resource will be updated when information is received regarding upcoming opportunities.
- organization: *All deadlines and details are subject to change. Please notify your school site's Career Coordinator upon securing an internship.
- website_email_address: Note: The inclusion of an internship/program in this document is not an endorsement or recommendation by SMUHSD.

#### Category / Section: Agriculture and Natural Resources
- column_8: updated 01/12/26

#### Record: Oakland Zoo (https://www.oaklandzoo.org/)
- record_id: `internship-opportunities-list-row-6`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 6
- source_category: Agriculture and Natural Resources
- organization: Oakland Zoo (https://www.oaklandzoo.org/)
- summer_year_round: Summer 2026
- application_due_date: 2026-04-01
- sign_up_for_future_details: Application (https://www.oaklandzoo.org/programs-and-events/teen-assistants-t-a)
- internships_programs_link_to_flyer: Teen Internship Information (https://www.oaklandzoo.org/programs-and-events/teen-summer-internships)
- requirements_summary: |
  Teen Assistants & Interns -TAs must commit to working three weeks during the summer, Monday through Friday, from 8:30 a.m.–4:30 p.m., and may be invited back for additional weeks as the schedule allows.
  You will be assigned to a ZooCamp class and will assist your teacher with tours, games, crafts and general camp merriment! Read website for details.
- paid_unpaid: Zoo Camp Teen Assistant - Volunteer, Zoo Camp Teacher Intern $400/week stipend

#### Category / Section: Arts, Media and Entertainment
- column_8: updated 1/12/26

#### Record: Asian Art Museum (https://asianart.org/?_ga=2.143483894.2146903706.1621271242-2125846010.1618845296)
- record_id: `internship-opportunities-list-row-8`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 8
- source_category: Arts, Media and Entertainment
- organization: Asian Art Museum (https://asianart.org/?_ga=2.143483894.2146903706.1621271242-2125846010.1618845296)
- summer_year_round: Currently on hold
- application_due_date: Currently on hold January 2026
- internships_programs_link_to_flyer: Internship
- website_email_address: https://about.asianart.org/art-speak/

#### Category / Section: Building and Construction, Engineering and Architecture
- column_8: updated 1/12/26

#### Record: DPR Construction - Build Up Summer Intern (https://www.dpr.com/)
- record_id: `internship-opportunities-list-row-10`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 10
- source_category: Building and Construction, Engineering and Architecture
- organization: DPR Construction - Build Up Summer Intern (https://www.dpr.com/)
- summer_year_round: Summer 2026
- application_due_date: 2026-04-15
- sign_up_for_future_details: n/a
- internships_programs_link_to_flyer: Internship
- website_email_address: https://www.dpr.com/build-up-high-school-internship
- requirements_summary: Rising high school juniors, seniors, or graduating seniors. You will work in the job trailer, side by side with a project team building a major commercial construction project. You will learn about managing a multi-million-dollar project, the innovative technology used for planning, scheduling and design, and the wide range of professional roles needed to build great things. 8 weeks, 35-40 hours per week, in person.
- paid_unpaid: Paid

#### Record: Santa Clara University Summer Engineering Seminar (https://www.scu.edu/)
- record_id: `internship-opportunities-list-row-11`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 11
- source_category: Building and Construction, Engineering and Architecture
- organization: Santa Clara University Summer Engineering Seminar (https://www.scu.edu/)
- summer_year_round: Summer 2026
- application_due_date: 9:00 p.m. PT on Monday, March 31, 2026
- internships_programs_link_to_flyer: Application (https://scu.az1.qualtrics.com/jfe/form/SV_6fohRhLV1Td8j7E)
- website_email_address: https://www.scu.edu/engineering/beyond-the-classroom/outreach/summer-engineering-seminar-ses/
- requirements_summary: This five-day immersion summer experience is for current high school sophomores and juniors, who are interested in exploring the field of engineering. The program offers specially designed introductory workshops taught by our engineering faculty that are presented as a mix of lecture and interactive work, spanning several fields of engineering. Participants will also get a taste of university life and the academic expectations of college. Along with living in the dorms during the program, students will interact with our faculty, students, and other members of the SCU community throughout the week.
- paid_unpaid: n/a

#### Record: Trades Introduction Program (https://smcuca.org/tip-san-mateo)
- record_id: `internship-opportunities-list-row-12`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 12
- source_category: Building and Construction, Engineering and Architecture
- organization: Trades Introduction Program (https://smcuca.org/tip-san-mateo)
- summer_year_round: Year Round
- application_due_date: |
  January 2026 Last Orientation
  Check back for upcoming dates.
- sign_up_for_future_details: Attend an information session (https://docs.google.com/forms/d/e/1FAIpQLSfAfl_4AM1FUSokdWAeSinUZ-Moqr9Ua1wQBN-QxDCIWQoxuw/viewform?sourceid=1015262&emci=e6eb95a0-6fc6-f011-8196-6045bdfe8e9c&emdi=021062bb-75c6-f011-8196-6045bdfe8e9c&ceid=10646981)
- internships_programs_link_to_flyer: Program
- website_email_address: For Information call (650) 341-7711
- requirements_summary: San Mateo Trades Introduction Program - Pre Apprenticeship-Readiness Program - Hands on Training - Blue Print Read & Technology, Overview of the Basic, Mechanical & Finish Trades, Ability to Explore what each Trade has to offer, Tools & Materials, First Aid/CPR & OSHA 10 Certification, Basic Math, Learn about the Skills Necessary for a /certified Trade Apprenticeship and Industry Guest Speakers
- paid_unpaid: n/a

#### Record: NASA Events and Internships for High School Students (https://intern.nasa.gov/)
- record_id: `internship-opportunities-list-row-13`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 13
- source_category: Building and Construction, Engineering and Architecture
- organization: NASA Events and Internships for High School Students (https://intern.nasa.gov/)
- summer_year_round: https://stemgateway.nasa.gov/public/s/explore-opportunities
- internships_programs_link_to_flyer: Internship
- website_email_address: https://intern.nasa.gov/
- requirements_summary: NASA offers paid summer internships for undergraduate and graduate students in a variety of disciplines from engineering and science to technology, business, and finance. Students need to register to apply - https://intern.nasa.gov/ossi/web/students/login/
- paid_unpaid: Paid/Unpaid

#### Record: Upwind Aviation Program
- record_id: `internship-opportunities-list-row-14`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 14
- source_category: Building and Construction, Engineering and Architecture
- organization: Upwind Aviation Program
- summer_year_round: Summer 2026
- application_due_date: 2026-02-20
- sign_up_for_future_details: Application (https://www.upwindscholarship.com/applications/)
- internships_programs_link_to_flyer: Program
- requirements_summary: This program provides ground and flight training to Bay Area high school juniors with a passion for aviation. Scholarship recipients will complete a 9-week intensive training program during the summer between their junior and senior year to prepare them to take the FAA Private Pilot Airplane examination. We are committed to diversity and encourage all interested students to apply.
- paid_unpaid: n/a

#### Record: International Brotherhood of Electrical Workers Local Union 617 (IBEW) and the National Electrical Contractors Association (NECA) (http://www.ibew617.com/)
- record_id: `internship-opportunities-list-row-15`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 15
- source_category: Building and Construction, Engineering and Architecture
- organization: International Brotherhood of Electrical Workers Local Union 617 (IBEW) and the National Electrical Contractors Association (NECA) (http://www.ibew617.com/)
- summer_year_round: Year Round
- application_due_date: Rolling
- internships_programs_link_to_flyer: Inside Lineman Electrical Apprenticeship
- website_email_address: ibewyes.org (http://ibewyes.org/)
- requirements_summary: |
  -Graduating senior
  -18 years and above

#### Record: Business and Finance, Marketing, Sales and Services
- record_id: `internship-opportunities-list-row-16`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 16
- source_category: Building and Construction, Engineering and Architecture
- organization: Business and Finance, Marketing, Sales and Services

#### Record: Jewish Family & Children Services (https://www.jfcs.org/find-help/youth/internships/summer-internship-program/)
- record_id: `internship-opportunities-list-row-17`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 17
- source_category: Building and Construction, Engineering and Architecture
- organization: Jewish Family & Children Services (https://www.jfcs.org/find-help/youth/internships/summer-internship-program/)
- summer_year_round: Summer 2026
- application_due_date: Deadline is Feb 6th
- sign_up_for_future_details: Application (https://forms.office.com/Pages/ResponsePage.aspx?id=CBcP12OKdk-3fVvCFueV9SQLNHYIHANMmz97o-qy025UOUw1NExESUFHQlpHWlNTMTI2WFkxVTUzWiQlQCNjPTEkJUAjdD1n)
- internships_programs_link_to_flyer: Youth first Summer Internship
- website_email_address: https://www.jfcs.org/find-help/youth/internships/summer-internship-program/
- requirements_summary: |
  JFCS offers six-week summer internships to qualified students entering grade 10, 11, and 12 in the fall. Our internship program is a great opportunity for teens to learn valuable on-the-job skills and gain real work experience. $18/hour.
  Program Fee: $500 (financial assistance is available).
- paid_unpaid: Paid

#### Record: Bank of America Leadership Program/Internship 2025 (https://about.bankofamerica.com/en/making-an-impact/student-leaders)
- record_id: `internship-opportunities-list-row-18`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 18
- source_category: Building and Construction, Engineering and Architecture
- organization: Bank of America Leadership Program/Internship 2025 (https://about.bankofamerica.com/en/making-an-impact/student-leaders)
- summer_year_round: Summer 2026
- application_due_date: Check back in March
- internships_programs_link_to_flyer: Program/Internship
- website_email_address: Student Leader info (https://about.bankofamerica.com/en/making-an-impact/student-leaders)
- requirements_summary: |
  -As a Student Leader, you will:
  -Work as a paid intern at a local nonprofit for eight weeks
  -Attend the weeklong Student Leaders Summit in Washington, D.C. *
  -Develop leadership and career skills
  -Connect with like-minded students from your own community and across the country
- paid_unpaid: Paid

#### Record: Education, Child Development, and Family Services
- record_id: `internship-opportunities-list-row-19`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 19
- source_category: Building and Construction, Engineering and Architecture
- organization: Education, Child Development, and Family Services

#### Record: Big Lift Inspiring Summers Learning Facilitator Intern.
- record_id: `internship-opportunities-list-row-20`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 20
- source_category: Building and Construction, Engineering and Architecture
- organization: Big Lift Inspiring Summers Learning Facilitator Intern.
- summer_year_round: Summer 2026
- application_due_date: Application (https://www.governmentjobs.com/careers/sanmateo/jobs/5227125/san-mateo-county-libraries-big-lift-inspiring-summers-learning-facilitator)
- internships_programs_link_to_flyer: Internship
- website_email_address: thebiglift.org (http://thebiglift.org/)
- requirements_summary: Learning Facilitators will be responsible for leading high-quality and connected learning experiences with children and collaborating with the other staff in a classroom environment for the Big Lift Summer Program. Learning Facilitators will establish and maintain an environment that embraces the growth mindset, actively facilitate open-ended, child directed projects, and look for every opportunity to embrace and incorporate youth creativity.
- paid_unpaid: Paid

#### Record: Boys & Girls Club of the Peninsula (https://www.bgcp.org/)
- record_id: `internship-opportunities-list-row-21`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 21
- source_category: Building and Construction, Engineering and Architecture
- organization: Boys & Girls Club of the Peninsula (https://www.bgcp.org/)
- summer_year_round: Summer 2026
- application_due_date: Currently not active
- sign_up_for_future_details: Application
- internships_programs_link_to_flyer: Internship
- requirements_summary: Academic Youth Development Summer Intern - Hours/commitment for Summer Interns: 3-5 consecutive weeks, daily, 8:00am-4:00pm with option for half day (morning or afternoon) Interested or want to learn more? call (650) 646-6062
- paid_unpaid: No information available as of 3/5/26.

#### Record: Exploratorium - High School Explainers (https://www.exploratorium.edu/)
- record_id: `internship-opportunities-list-row-22`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 22
- source_category: Building and Construction, Engineering and Architecture
- organization: Exploratorium - High School Explainers (https://www.exploratorium.edu/)
- summer_year_round: Summer 2025
- application_due_date: Check back March 2025
- sign_up_for_future_details: Application opens in March
- internships_programs_link_to_flyer: Various Programs
- website_email_address: High School Explainers (https://www.exploratorium.edu/about/explainers/high-school)
- requirements_summary: |
  Youth must be able to attend all mandatory training to be considered. (An exception can be made if there is a valid reason why a student cannot make one of the training sessions.)
  
  This is a paid position ($17.34/hr).
  
  To be eligible:
  Candidates must be high school aged students – (between the ages of 15 and 18 for first time Explainers, and up to the age of 20 for returning Explainers.)
  Must be able to obtain a valid work permit.
  Must be able to attend all basic training dates
- paid_unpaid: paid

#### Record: Energy, Environment, and Utilities, Transportation
- record_id: `internship-opportunities-list-row-23`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 23
- source_category: Building and Construction, Engineering and Architecture
- organization: Energy, Environment, and Utilities, Transportation

#### Record: Stanford Earth Young Investigators (https://sustainability.stanford.edu/admissions-education/k-12-outreach/young-investigators)
- record_id: `internship-opportunities-list-row-24`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 24
- source_category: Building and Construction, Engineering and Architecture
- organization: Stanford Earth Young Investigators (https://sustainability.stanford.edu/admissions-education/k-12-outreach/young-investigators)
- summer_year_round: Summer 2025
- application_due_date: 2026-03-15
- internships_programs_link_to_flyer: Internship
- requirements_summary: At the Stanford Doerr School of Sustainability, high school scholars spend the summer working in research groups and laboratories on the main Stanford campus. Letter or recommendation from a teacher is required. Learn more https://sustainability.stanford.edu/admissions-education/k-12-outreach/young-investigators/faqs
- paid_unpaid: Unpaid. Financial honorarium offered for qualifying students.

#### Record: Metropolitan Transportation Commission (https://mtc.ca.gov/jobs-contracts/job-opportunities/internships/high-school-internships)
- record_id: `internship-opportunities-list-row-25`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 25
- source_category: Building and Construction, Engineering and Architecture
- organization: Metropolitan Transportation Commission (https://mtc.ca.gov/jobs-contracts/job-opportunities/internships/high-school-internships)
- summer_year_round: Summer 2026
- application_due_date: TBD
- sign_up_for_future_details: Application Opens late March 2026
- internships_programs_link_to_flyer: Internship
- website_email_address: |
  https://mtc.ca.gov/jobs-contracts/job-opportunities/internships/high-school-internships
  Questions contact InternCoordinator@bayareametro.gov
- requirements_summary: Must be 15 yrs old to apply. MTC offers Bay Area high school students the opportunity to discover the inner workings of a metropolitan planning organization, and start on a career path in government service
- paid_unpaid: Unpaid

#### Record: The Golden Gate National Parks Conservancy (LINC) (https://www.parksconservancy.org/)
- record_id: `internship-opportunities-list-row-26`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 26
- source_category: Building and Construction, Engineering and Architecture
- organization: The Golden Gate National Parks Conservancy (LINC) (https://www.parksconservancy.org/)
- summer_year_round: Summer 2026
- sign_up_for_future_details: Application (https://gogaregistration.tfaforms.net/120?_gl=1*1usiy04*_gcl_au*ODMyNzg3NTc1LjE3MzE5NzUyMDg.*_ga*MjczNDYzNDk2LjE2NTUxNTY3MjI.*_ga_D50S6PV0QJ*MTczNzc2MTI0Ni42NC4xLjE3Mzc3NjIyNDIuMC4wLjA.)
- internships_programs_link_to_flyer: Internship Program
- website_email_address: https://www.parksconservancy.org/programs/linc-summer-high-school-program
- requirements_summary: |
  SEJI - Science & Environmental Justice Intensive - 3-Week Program - Get paid up to $1500
  
  SOL - Summer of Outdoor Leadership - 6-Week Program - Get paid up to $2400
- paid_unpaid: Paid

#### Record: Health Science and Medical Technology
- record_id: `internship-opportunities-list-row-27`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 27
- source_category: Building and Construction, Engineering and Architecture
- organization: Health Science and Medical Technology

#### Record: Stanford Medical Youth Science Program (https://med.stanford.edu/odme/high-school-students/smysp.html)
- record_id: `internship-opportunities-list-row-28`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 28
- source_category: Building and Construction, Engineering and Architecture
- organization: Stanford Medical Youth Science Program (https://med.stanford.edu/odme/high-school-students/smysp.html)
- summer_year_round: June 22nd - July 26th, 2026
- application_due_date: 2026-03-23
- sign_up_for_future_details: https://stanfordodme.slideroom.com/#/login/program/81488
- internships_programs_link_to_flyer: Application (https://stanfordodme.slideroom.com/)
- website_email_address: Application - Current Juniors can apply (https://stanfordodme.slideroom.com/)
- requirements_summary: For current juniors. The Stanford Medical Youth Science Program (SMYSP) is an online enrichment program for students from low-income, underrepresented backgrounds. Over five weeks, participants engage in faculty lectures, professional development workshops, virtual networking events, and a public health disparities research project. During the program and beyond, participants are mentored by faculty, health professionals, and college students on preparing for college, navigating careers in medicine, and becoming a leader today.
- paid_unpaid: n/a

#### Record: Stanford Pediatrics Summer Internship (https://med.stanford.edu/pediatrics/education/pediatrics-internship-program.html)
- record_id: `internship-opportunities-list-row-29`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 29
- source_category: Building and Construction, Engineering and Architecture
- organization: Stanford Pediatrics Summer Internship (https://med.stanford.edu/pediatrics/education/pediatrics-internship-program.html)
- summer_year_round: Summer 2026
- application_due_date: 2026-02-23
- internships_programs_link_to_flyer: Information and Application (https://med.stanford.edu/pediatrics/education/pediatrics-internship-program/application.html)
- website_email_address: https://med.stanford.edu/pediatrics/education/pediatrics-internship-program.html
- requirements_summary: |
  Program Dates: June 16 to July 29, 2025. Eligibility Requirements
  Students must:
  
  Currently be rising juniors or seniors.
  Be 16 years old or older by the start of the program.
  Be living in the U.S. and must be U.S. citizens or permanent residents with a green card.
  Live in Northern California, ideally no more than a 1-hour commute from the Stanford campus.
  We strongly encourage applications from students from first generation, low-income, and/or underrepresented backgrounds.
  Have access to a computer and internet access for the duration of the internship.
  Be available to start the program on June 16, 2025. 
  Weekly Time Commitment: 30 hours per week
- paid_unpaid: There is no cost for students to participate in this program. Admitted students who can demonstrate financial need are eligible for a $3,000 stipend for participating in this program.

#### Record: SAGE (https://sage.slac.stanford.edu/)
- record_id: `internship-opportunities-list-row-30`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 30
- source_category: Building and Construction, Engineering and Architecture
- organization: SAGE (https://sage.slac.stanford.edu/)
- summer_year_round: Summer 2026
- application_due_date: We will open applications from February 24 to March 17, 2026
- sign_up_for_future_details: https://sage.slac.stanford.edu/student-guide
- internships_programs_link_to_flyer: Camp/Program (https://sage.slac.stanford.edu/)
- requirements_summary: |
  Encouraging students in underserved communities, especially those who have never attended any type of summer camp in the past.The ideal SAGE Camp participant is the curious, resilient student who is not necessarily on a STEM career path. This camp is FREE. If you have not attended any summer camp in the past, but are curious about careers in STEM, we encourage you to APPLY now and take advantage of this amazing opportunity!
  
  Grade – must be a current 9th, 10th, or 11th grader in a Northern California public high school. Please contact us if you have any questions about accommodations for camp.
- paid_unpaid: n/a

#### Record: UCSF - CURE Research Internship
- record_id: `internship-opportunities-list-row-31`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 31
- source_category: Building and Construction, Engineering and Architecture
- organization: UCSF - CURE Research Internship
- summer_year_round: Summer 2026
- application_due_date: Application Closed
- sign_up_for_future_details: Application (https://ucsf.co1.qualtrics.com/jfe/form/SV_7PUzz6yz9HpyFF4)
- internships_programs_link_to_flyer: Internship (https://cseo.ucsf.edu/cure-internship)
- website_email_address: https://cseo.ucsf.edu/summer-opportunities (https://cseo.ucsf.edu/cure-internship)
- requirements_summary: |
  Students who come from backgrounds considered underrepresented in the sciences, first-generation, and/or low-income
  Must be a current 11th grader in high school and at least 16 years old by the start of the program
  Must have a minimum GPA of 2.5
  Must have completed Biology or Chemistry with a grade of B or better
  Must be able to commit 40 hours a week during the summer
- paid_unpaid: Paid

#### Record: Stanford Genomics Research Internship Program at Stanford: GRIPS (https://med.stanford.edu/genecamp/process)
- record_id: `internship-opportunities-list-row-32`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 32
- source_category: Building and Construction, Engineering and Architecture
- organization: Stanford Genomics Research Internship Program at Stanford: GRIPS (https://med.stanford.edu/genecamp/process)
- summer_year_round: Summer 2026
- application_due_date: Application Closed
- sign_up_for_future_details: Application (https://ssrp.slideroom.com/)
- internships_programs_link_to_flyer: Internship
- website_email_address: https://med.stanford.edu/genecamp/process
- requirements_summary: GRIPS is a twenty hour, eight week long research intensive experience for high school students. Program participants will be placed in a research laboratory for the summer and conduct genomics research under the supervision of a lab mentor.
- paid_unpaid: n/a

#### Record: Kaiser Permanente (https://kplaunch.kaiserpermanente.org/)
- record_id: `internship-opportunities-list-row-33`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 33
- source_category: Building and Construction, Engineering and Architecture
- organization: Kaiser Permanente (https://kplaunch.kaiserpermanente.org/)
- summer_year_round: Summer 2025
- application_due_date: Application Closed
- requirements_summary: Kaiser Permanente offers qualified high school students age 16 and up paid summer work experience through the LAUNCH (Learn About Unlimited New Careers in Health Care).
- paid_unpaid: Paid

#### Record: Stanford Medical Institutes of Summer Research (https://simr.stanford.edu/)
- record_id: `internship-opportunities-list-row-34`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 34
- source_category: Building and Construction, Engineering and Architecture
- organization: Stanford Medical Institutes of Summer Research (https://simr.stanford.edu/)
- summer_year_round: Summer 2026
- application_due_date: Application Closed
- internships_programs_link_to_flyer: Program
- website_email_address: https://simr.stanford.edu/application.html
- requirements_summary: The Stanford Institutes of Medicine Summer Research Program (SIMR) is an eight-week program in which high school students from diverse backgrounds are invited to perform basic research with Stanford faculty, postdoctoral fellows, students and researchers on a medically-oriented project. The goals of the program include increasing interest in biological sciences and medicine in high school students, helping students to understand how scientific research is performed, and increasing diversity of students and researchers in the sciences.
- paid_unpaid: Stipend $500-$1500

#### Record: UCSF -Summer Researchers in Global Health (https://globalhealthsciences.ucsf.edu/education/global-reach/summer-researchers-global-health)
- record_id: `internship-opportunities-list-row-35`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 35
- source_category: Building and Construction, Engineering and Architecture
- organization: UCSF -Summer Researchers in Global Health (https://globalhealthsciences.ucsf.edu/education/global-reach/summer-researchers-global-health)
- application_due_date: No information available as of 3/5/26
- requirements_summary: Rising Seniors can apply. Summer Researchers in Global Health is a six-week summer internship for rising high school seniors that introduces students to global health concepts and immerses them in challenging, real-life projects. Each summer, qualified students from participating San Francisco Bay Area high schools learn from and work with expert global health researchers at the Institute for Global Health Sciences on the UCSF Mission Bay campus. Due to changing conditions during the COVID pandemic, part or all of the program may need to move online.
- paid_unpaid: Interns with financial need may qualify for a stipend of $2,000.

#### Record: Information and Communication Technologies
- record_id: `internship-opportunities-list-row-36`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 36
- source_category: Building and Construction, Engineering and Architecture
- organization: Information and Communication Technologies

#### Record: Girls who Code (https://girlswhocode.com/)
- record_id: `internship-opportunities-list-row-37`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 37
- source_category: Building and Construction, Engineering and Architecture
- organization: Girls who Code (https://girlswhocode.com/)
- summer_year_round: Summer 2026
- application_due_date: |
  Early Application Deadline: February 25th, 2026
  General Application Deadline: April 10th, 2026
- website_email_address: Girls Who Code's 2026 Pathways Application (https://girlswhocode.my.salesforce-sites.com/GWCEnrollment/apex/ERx_Forms__PageMaker?pageId=Welcome)
- requirements_summary: Participants will be able to explore coursework in five tracks throughout the program: Data Science + AI, Game Design, Web Development, Cybersecurity, and AI + Society. Beyond coding, students gain real-world insights through virtual Partner Events with leading tech organizations.

#### Record: Computer History Museum (https://computerhistory.org/)
- record_id: `internship-opportunities-list-row-38`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 38
- source_category: Building and Construction, Engineering and Architecture
- organization: Computer History Museum (https://computerhistory.org/)
- summer_year_round: Summer/Year Round
- application_due_date: Currently not accepting applications for teen volunteers.
- sign_up_for_future_details: Program on hold
- internships_programs_link_to_flyer: Internship
- website_email_address: https://computerhistory.org/internships/
- requirements_summary: Currently, we are not accepting applications for our Teen Programs. Contact us to learn more about becoming a teen volunteer intern. (https://docs.google.com/forms/d/e/1FAIpQLSfnGjJJrM9XJRALr3fexJT4fzj1QprQhDqeJ3S7cPBNXhiH5g/viewform)
- paid_unpaid: Unpaid & Paid

#### Record: Public Services
- record_id: `internship-opportunities-list-row-39`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 39
- source_category: Building and Construction, Engineering and Architecture
- organization: Public Services

#### Record: San Mateo Consolidated Fire Department (https://www.smcfire.org/)
- record_id: `internship-opportunities-list-row-40`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 40
- source_category: Building and Construction, Engineering and Architecture
- organization: San Mateo Consolidated Fire Department (https://www.smcfire.org/)
- summer_year_round: Year Round
- application_due_date: Typically Recruits during the month of January
- sign_up_for_future_details: n/a
- internships_programs_link_to_flyer: Explorer Program
- website_email_address: |
  Visit this link for appropriate documents. Print and fill out application + resume, and hand in or mail to: San Mateo Consolidated Fire Department – Administration Office
  C/O Cadet Program
  2121 S. El Camino Real, Bldg. B, Suite 100
  San Mateo, CA 94403
- requirements_summary: |
  Prospective Candidates must possess an Emergency Medical Technician Certificate
  Currently enrolled or have completed an accredited Firefighter I Academy
  Possess a valid Driver’s License
  Be at least 18 years of age
  Cadets must ride-along minimum of 48 hours per month and complete 5 hours per month in either: Fire Administration, Fire Prevention Bureau, or Fire Training Division
- paid_unpaid: Upaid

#### Record: San Mateo County Explorer Law Enforement (810) & Search and Rescue Program (830) (https://www.smcsheriff.com/community-activities)
- record_id: `internship-opportunities-list-row-41`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 41
- source_category: Building and Construction, Engineering and Architecture
- organization: San Mateo County Explorer Law Enforement (810) & Search and Rescue Program (830) (https://www.smcsheriff.com/community-activities)
- summer_year_round: Year Round
- application_due_date: Interested candidates can email: smcsosarpost830@gmail.com or (650)488-1516
- website_email_address: smcsosarpost830@gmail.com
- requirements_summary: Most critical times for this position is three months before the fall academy in September (Summertime). Spring academy starts in February! See flyer here with details. 14-21yrs can apply. (https://drive.google.com/file/d/1OeOf_NnEHEpriOWGX-2E_w2fXeyhdMkN/view?usp=sharing)
- paid_unpaid: n/a

#### Record: Police Explorer Program, San Mateo Police Department (https://www.cityofsanmateo.org/2813/Police-Explorer-Program)
- record_id: `internship-opportunities-list-row-42`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 42
- source_category: Building and Construction, Engineering and Architecture
- organization: Police Explorer Program, San Mateo Police Department (https://www.cityofsanmateo.org/2813/Police-Explorer-Program)
- summer_year_round: Year Round
- application_due_date: Ongoing
- website_email_address: Email completed application to: joinsmpd@cityofsanmateo.org
- requirements_summary: For ages - 14 to 21 years old To promote and provide positive teenage and young adult activities through police and community involvement and participation.
- paid_unpaid: n/a

#### Record: Explorer- California Highway Patrol (https://www.chp.ca.gov/home)
- record_id: `internship-opportunities-list-row-43`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 43
- source_category: Building and Construction, Engineering and Architecture
- organization: Explorer- California Highway Patrol (https://www.chp.ca.gov/home)
- summer_year_round: Year Round
- application_due_date: Ongoing
- sign_up_for_future_details: n/a
- internships_programs_link_to_flyer: Program (https://chpmadeformore.com/resources/explorer/)
- website_email_address: For questions about the Explorer Program, speak with Community Outreach and Marketing Section by calling 916-843-3210 or also by contacting your local CHP area office and speaking with an explorer advisor there.
- requirements_summary: The California Highway Patrol's Explorer Program is designed for young men and women, 15 to 21 years of age, allowing them to develop the skills and knowledge needed to serve the people of California through discipline and a commitment to serving their community.

#### Record: Close The Gap Foundation (https://www.closethegapfoundation.org/)
- record_id: `internship-opportunities-list-row-44`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Internship Opportunities List`
- source_row: 44
- source_category: Building and Construction, Engineering and Architecture
- organization: Close The Gap Foundation (https://www.closethegapfoundation.org/)
- summer_year_round: Summer
- application_due_date: Expected Summer 2026
- internships_programs_link_to_flyer: Application (https://www.closethegapfoundation.org/program/fellowship-2026)
- requirements_summary: Low income rising Juniors & Seniors. scholars are introduced to essential life skills like public speaking, networking, forging relationships, project management, and college preparation.
- paid_unpaid: n/a

### Sheet: Volunteer Opportunities List

- source_file: `SMUHSD Career Center Opportunities.xlsx`
- sheet_name: `Volunteer Opportunities List`
- non_empty_rows: 62

- interpreted_header_row: 1

#### Source Row 1 (header/note)
- column_1: Agency Name
- column_2: Area of Focus
- column_3: Location
- column_4: Website
- column_5: Contact
- column_6: Notes

#### Record: NOTE: The inclusion of a program in this listing is not an endorsement or recommendation by the SMUHSD.
- record_id: `volunteer-opportunities-list-row-2`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 2
- agency_name: NOTE: The inclusion of a program in this listing is not an endorsement or recommendation by the SMUHSD.
- notes: Students and parents should research opportunities and contact the organization for the most updated information.
- column_8: PLEASE CHECK BACK FOR UPDATES.
- column_9: 9/15/25 This will be updated soon.

#### Category / Section: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- column_5: UPDATED: 9/15/25

#### Record: A Foundation Building Strength
- record_id: `volunteer-opportunities-list-row-5`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 5
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: A Foundation Building Strength
- area_of_focus: Finding treatments for Nemaline Myopathy (neuromuscular disorders)
- location: Palo Alto
- website: http://buildingstrength.org/
- contact: info@buildingstrength.org or 650.532.3274

#### Record: American Cancer Society
- record_id: `volunteer-opportunities-list-row-6`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 6
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: American Cancer Society
- area_of_focus: Relay for Life of Burlingame
- location: Burlingame
- website: https://secure.acsevents.org/site/SPageServer;jsessionid=00000000.app333b?pagename=relay_get_involved&NONCE_TOKEN=3DAA094F756C512D8AD12833EA5887DB

#### Record: American Red Cross
- record_id: `volunteer-opportunities-list-row-7`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 7
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: American Red Cross
- area_of_focus: Disaster relief, support American military families, lifesaving blood, health & safety services, international services
- location: Various
- website: https://www.redcross.org/local/california/northern-california-coastal/volunteer/youth-volunteers.html
- contact: http://www.redcross.org/about-us/news-and-events/connect-with-us
- notes: Give Blood (https://www.redcrossblood.org/)

#### Record: Best Buddies
- record_id: `volunteer-opportunities-list-row-8`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 8
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Best Buddies
- area_of_focus: Creates opportunities for one-to-one friendships, integrated employment and leadership development for people with intellectual and developmental disabilities (IDD). Virtual opportunities available.
- location: San Francisco
- website: https://www.bestbuddies.org/volunteer/
- contact: california@bestbuddies.org or 415.371.1169

#### Record: Burlingame Main Library
- record_id: `volunteer-opportunities-list-row-9`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 9
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Burlingame Main Library
- area_of_focus: Teen Mentors Needed. Academic support to elementary and middle school age students
- location: Burlingame
- website: https://www.burlingame.org/1192/Homework-Help-Mentors
- notes: 9/15/25 Applications closed

#### Record: Burlingame Neighborhood Network
- record_id: `volunteer-opportunities-list-row-10`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 10
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Burlingame Neighborhood Network
- area_of_focus: Community engagement and disaster preparedness
- location: Burlingame
- website: https://burlingamenetwork.org/
- contact: info@theneighborhoodnetwork.org
- notes: Drill October 4, 2025. Burlingame Neighborhood Network (BNN) encourages neighbors to connect with one another to build a sense of community, become informed about disaster preparedness and support one another during emergencies.

#### Record: Burlingame Youth Advisory Committee
- record_id: `volunteer-opportunities-list-row-11`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 11
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Burlingame Youth Advisory Committee
- area_of_focus: City of Burlingame Youth/Teens
- location: Burlingame
- website: https://burlingame.org/465/YAC-Youth-Advisory-Committee
- contact: sbliss@burlingame.org
- notes: Check website for updated application. Application closed. Check back at the start of the new school year.

#### Record: California Academy of Sciences
- record_id: `volunteer-opportunities-list-row-12`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 12
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: California Academy of Sciences
- area_of_focus: Explore, explain, and sustain life
- location: San Francisco
- website: https://www.calacademy.org/volunteering-at-the-academy
- notes: Volunteers must be 18 years old and above.

#### Record: California Coastal Cleanup Day
- record_id: `volunteer-opportunities-list-row-13`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 13
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: California Coastal Cleanup Day
- area_of_focus: Coastal clean up occurs every Saturday in September on an individual basis. Monthly opportunities are available
- location: Various
- website: https://www.coastal.ca.gov/publiced/cleanups.html
- contact: 415.904.5200
- notes: Self-guided, neighborhood, and close to home clean-ups.

#### Record: Catholic Charities
- record_id: `volunteer-opportunities-list-row-14`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 14
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Catholic Charities
- area_of_focus: Homelessness/housing, youth services, aging support, behavioral health, refugee/immigrant services
- location: San Francisco, San Mateo, Marin
- website: https://catholiccharitiessf.org/volunteer/
- contact: volunteer@catholiccharitiessf.org
- notes: Email for more information. Consider remote opportunities.

#### Record: City of San Mateo Annual Bayfront Cleanup and monthly cleanups
- record_id: `volunteer-opportunities-list-row-15`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 15
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: City of San Mateo Annual Bayfront Cleanup and monthly cleanups
- area_of_focus: San Mateo's largest and longest running shoreline cleanup.
- location: San Mateo
- website: https://cityofsanmateo.galaxydigital.com/need/
- notes: Check website for date and other opportunities

#### Record: City of San Mateo Police Explorers Program
- record_id: `volunteer-opportunities-list-row-16`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 16
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: City of San Mateo Police Explorers Program
- area_of_focus: Police Explorers are community service volunteers between the ages of 14-20 years old who are interested in learning, training, and participating in law enforcement functions and activities.
- location: San Mateo
- website: https://www.cityofsanmateo.org/2813/Police-Explorer-Program
- notes: Submit interest form. Open to students ages 14-20 years old.

#### Record: City of San Mateo, Youth Activities Council
- record_id: `volunteer-opportunities-list-row-17`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 17
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: City of San Mateo, Youth Activities Council
- area_of_focus: Provide experiences and opportunities for youth and teens
- website: https://cityofsanmateo.galaxydigital.com/need/
- notes: Check website

#### Record: County of San Mateo Youth Commission
- record_id: `volunteer-opportunities-list-row-18`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 18
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: County of San Mateo Youth Commission
- area_of_focus: Offer youth perspective on issues facing community, work with Board of Supervisors
- location: San Mateo County
- website: https://www.smcgov.org/ceo/youth-commission
- notes: Application closed 9/15/25

#### Record: Covenant House
- record_id: `volunteer-opportunities-list-row-19`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 19
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Covenant House
- area_of_focus: Provides care and services to homeless, exploited, abused youth
- location: Various
- website: https://www.covenanthouse.org/take-action/become-volunteer
- contact: https://www.covenanthouse.org/about-homeless-charity/contact

#### Record: CuriOdyssey
- record_id: `volunteer-opportunities-list-row-20`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 20
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: CuriOdyssey
- area_of_focus: Science and wildlife center
- location: San Mateo
- website: https://curiodyssey.org/get-involved/volunteer/
- contact: lcauble@CuriOdyssey.org or 650.340.7580
- notes: 12/6/24 Volunteer opportunities are available. Minimum age 16 years old.

#### Record: Environmental Leadership Initiative
- record_id: `volunteer-opportunities-list-row-21`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 21
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Environmental Leadership Initiative
- area_of_focus: Environmental sustainability
- website: https://www.smcoe.org/for-families/environmental-literacy/

#### Record: Girls on the Run
- record_id: `volunteer-opportunities-list-row-22`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 22
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Girls on the Run
- area_of_focus: Girls on the Run is an after-school program aimed to educate and build confidence in girls in the 3rd-8th grades. Our program uniquely combines physical activity with intentionally designed lessons that encourage mental, social, and emotional development.
- location: Hillsborough
- website: https://www.gotrbayarea.org/coach
- notes: Age 16-18

#### Record: Girl Scouts
- record_id: `volunteer-opportunities-list-row-23`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 23
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Girl Scouts
- area_of_focus: Programs for the developmental, educational, emotional, and social needs of girls from grades K-12
- location: Northern California
- website: https://www.gsnorcal.org/en/for-volunteers/troops.html
- contact: info@girlscoutsnorcal.org or 800.447.4475

#### Record: Glide Memorial
- record_id: `volunteer-opportunities-list-row-24`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 24
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Glide Memorial
- area_of_focus: Growth (advance families), wellness (feed the hungry), spirit (engage communities), leadership (create leaders)
- location: San Francisco
- website: https://www.glide.org/volunteer/
- contact: https://www.glide.org/contactus

#### Record: Golden Gate National Parks Conservancy
- record_id: `volunteer-opportunities-list-row-25`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 25
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Golden Gate National Parks Conservancy
- area_of_focus: Preserve Golden Gate National Parks
- location: San Francisco, Marin
- website: https://www.parksconservancy.org/volunteer/weekly-volunteer-programs
- contact: volunteer@parksconservancy.org

#### Record: Grassroots Ecology
- record_id: `volunteer-opportunities-list-row-26`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 26
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Grassroots Ecology
- area_of_focus: Involve and educate public to restore local ecosystems
- location: Various
- website: https://www.grassrootsecology.org/volunteer/
- contact: info@grassrootsecology.org or 650.419.9880

#### Record: Habitat for Humanity
- record_id: `volunteer-opportunities-list-row-27`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 27
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Habitat for Humanity
- area_of_focus: Dedicated to providing access to home ownership. Looking for volunteers 16 and older.
- location: Greater San Francisco
- website: https://habitatgsf.org/volunteer/

#### Record: Harvest Garden
- record_id: `volunteer-opportunities-list-row-28`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 28
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Harvest Garden
- area_of_focus: Community garden provides organic vegetables to shelters
- location: Hillsborough
- website: https://www.signupgenius.com/go/10c0f4ea9a729a7fd0-harvest#/
- contact: 650.829.5159

#### Record: Hiller Aviation Museum
- record_id: `volunteer-opportunities-list-row-29`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 29
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Hiller Aviation Museum
- area_of_focus: Aviation history
- location: San Carlos
- website: http://www.hiller.org/join-and-support/volunteer/
- contact: 650.654.0200

#### Record: Homework Central
- record_id: `volunteer-opportunities-list-row-30`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 30
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Homework Central
- location: San Mateo Park, Baywood, and Sunnybrae Elementary School
- website: https://smhwc.org/volunteer
- contact: roldham@smhwc.org odelgadillo@smhwc.org

#### Record: Jewish Family & Children's Services
- record_id: `volunteer-opportunities-list-row-31`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 31
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Jewish Family & Children's Services
- notes: Check website

#### Record: Leukemia & Lymphoma Society
- record_id: `volunteer-opportunities-list-row-32`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 32
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Leukemia & Lymphoma Society
- area_of_focus: Funds therapies and advances that impact blood cancer patients
- location: Various
- website: https://www.teamintraining.org/about/contact-information

#### Record: LifeMoves
- record_id: `volunteer-opportunities-list-row-33`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 33
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: LifeMoves
- area_of_focus: Homelessness
- location: San Mateo
- website: https://www.lifemoves.org/ways-to-give/volunteering/
- contact: volunteer@lifemoves.org

#### Record: Boys and Girls Clubs of the Peninsula
- record_id: `volunteer-opportunities-list-row-34`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 34
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Boys and Girls Clubs of the Peninsula
- area_of_focus: Tutoring, coaching
- location: San Mateo
- website: https://www.bgcp.org/volunteer
- contact: 650.347.9891. info@midpenbgc.org

#### Record: Mills-Peninsula Health Services
- record_id: `volunteer-opportunities-list-row-35`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 35
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Mills-Peninsula Health Services
- area_of_focus: Health services
- location: Burlingame
- website: https://www.sutterhealth.org/volunteering/opportunities/youth-volunteer-at-mills-peninsula-medical-center-1096205778
- contact: 650.696.2465
- notes: Check Youth Volunteer information on March 1, August 1, and November 1.

#### Record: Mothers Against Poverty
- record_id: `volunteer-opportunities-list-row-36`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 36
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Mothers Against Poverty
- area_of_focus: Education, hunger relief, orphan care
- location: Various
- website: https://momsagainstpoverty.org/volunteer/
- contact: https://momsagainstpoverty.org/who-we-are/contact-us/

#### Record: Nine Lives
- record_id: `volunteer-opportunities-list-row-37`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 37
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Nine Lives
- area_of_focus: Provides lifelines for at-risk cats and kittens and affordable, compassionate care
- location: Various
- website: https://ninelivesfoundation.org/get-involved/#volunteer
- notes: 18 years +

#### Record: Operation: Care and Comfort
- record_id: `volunteer-opportunities-list-row-38`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 38
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Operation: Care and Comfort
- area_of_focus: Support troops, veterans and their families
- location: Various
- website: https://www.occ-usa.org/
- contact: 408.832.2929

#### Record: Pacifica Beach Coalition
- record_id: `volunteer-opportunities-list-row-39`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 39
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Pacifica Beach Coalition
- area_of_focus: Protects and preserves the health of our ocean, beaches, wildlife, and coastal environment
- location: Various
- website: https://www.pacificbeachcoalition.org/street-to-beach-cleanups-volunteer-earth-hero-needed/
- contact: http://pacificabeachcoalition.org/contact-us/
- notes: Beach clean ups are cancelled. Individuals are encouraged to help with Street to Beach clean ups which can be done safely.

#### Record: Peninsula Family Service
- record_id: `volunteer-opportunities-list-row-40`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 40
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Peninsula Family Service
- area_of_focus: Provides children, families, and older adults the support and tools to realize their full potential and lead healthy, stable lives
- location: Various
- website: https://peninsulafamilyservice.org/get-involved/become-a-volunteer/
- contact: info@peninsulafamilyservice.org
- notes: 12/6/24 Left message to verify high school volunteer needs

#### Record: Peninsula Family YMCA
- record_id: `volunteer-opportunities-list-row-41`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 41
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Peninsula Family YMCA
- area_of_focus: Dedicated to youth development, healthy living and social responsibility
- location: San Mateo and others
- website: https://www.ymcasf.org/get-involved/volunteer?field_location_reference_multi_target_id[]=454 (https://www.ymcasf.org/get-involved/volunteer?field_location_reference_multi_target_id%5B%5D=454)
- notes: Volunteer opportunities temporarily on hold.

#### Record: Peninsula Food Runners
- record_id: `volunteer-opportunities-list-row-42`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 42
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Peninsula Food Runners
- area_of_focus: Alleviate hunger and minimize food waste in SF Bay Area
- location: Various
- website: https://peninsulafoodrunners.org/become-a-volunteer/

#### Record: Peninsula Humane Society and SPCA
- record_id: `volunteer-opportunities-list-row-43`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 43
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Peninsula Humane Society and SPCA
- area_of_focus: Open-door shelter, support animals
- location: Burlingame
- website: https://phs-spca.org/volunteer/positions/junior/
- contact: https://www.peninsulahumanesociety.org/about/contact.html

#### Record: Project Glimmer
- record_id: `volunteer-opportunities-list-row-44`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 44
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Project Glimmer
- area_of_focus: Dedicated to at-risk teen girls and women
- location: Various
- website: https://www.projectglimmer.org/volunteers

#### Record: Project Read
- record_id: `volunteer-opportunities-list-row-45`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 45
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Project Read
- area_of_focus: Adult literacy program
- location: San Mateo
- website: http://www.cityofsanmateo.org/index.aspx?NID=927
- contact: 650.522.7848
- notes: Call for more information.

#### Record: Rocket Dog Rescue
- record_id: `volunteer-opportunities-list-row-46`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 46
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Rocket Dog Rescue
- area_of_focus: Dedicated to saving homeless and abandoned animals
- location: San Francisco
- website: https://www.rocketdogrescue.org/volunteer-2/about-volunteering/
- contact: https://www.rocketdogrescue.org/contact/
- notes: Contact the organization to volunteer at a specific event. 16 years and above.

#### Record: Samaritan House
- record_id: `volunteer-opportunities-list-row-47`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 47
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Samaritan House
- area_of_focus: Provides food, access to shelter, healthcare, and supportive services to those in need
- location: San Mateo County
- website: https://samaritanhousesanmateo.org/volunteer/

#### Record: San Francisco International Airport (SFO)
- record_id: `volunteer-opportunities-list-row-48`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 48
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: San Francisco International Airport (SFO)
- location: SFO
- website: https://www.flysfo.com/about-sfo/careers/volunteering
- contact: Gabe Phung at 650.821.9911
- notes: 17 years and above

#### Record: San Francisco Zoo
- record_id: `volunteer-opportunities-list-row-49`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 49
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: San Francisco Zoo
- area_of_focus: Animal care, advancing wildlife conservation, educating visitors about nature
- location: San Francisco
- website: https://www.sfzoo.org/volunteer-programs/#teenvolunteers
- notes: Volunteer opportunities temporarily on hold.

#### Record: San Mateo County Office of Education - Outdoor Education
- record_id: `volunteer-opportunities-list-row-50`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 50
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: San Mateo County Office of Education - Outdoor Education
- area_of_focus: Cabin leader for Outdoor Ed Camp
- location: Various
- website: https://www.smcoe.org/for-families/attending-outdoor-education/cabin-leaders.html#:~:text=What%20Is%20a%20Cabin%20Leader,demanding%20and%20very%20rewarding%20task.
- notes: Volunteers needed for upcoming week-long camps throughout the school year. Please see your Career Coordinator for more information.

#### Record: Sea Hugger
- record_id: `volunteer-opportunities-list-row-51`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 51
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Sea Hugger
- area_of_focus: Our mission is to educate the public to reduce plastic dependency, while focusing on protecting the marine environment, ensuring the intrinsic rights of aquatic life, and helping create sustainable communities that are no longer affected by plastic pollution.
- website: https://www.seahugger.org/programs-home

#### Record: Second Harvest of Silicon Valley (formerly Second Harvest Food Bank)
- record_id: `volunteer-opportunities-list-row-52`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 52
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Second Harvest of Silicon Valley (formerly Second Harvest Food Bank)
- area_of_focus: Food bank
- location: San Mateo and Santa Clara County
- website: https://www.shfb.org/give-help/volunteer/
- contact: http://www.shfb.org/contact
- notes: Sign up required

#### Record: SF Jazz
- record_id: `volunteer-opportunities-list-row-53`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 53
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: SF Jazz
- area_of_focus: Recognized international leader in jazz creation, presentation, and education
- location: San Francisco, Other
- contact: volunteer@sfjazz.org
- notes: 18 years old. Year commitment, minimum 3 shows per quarter

#### Record: SF-Marin Food Bank
- record_id: `volunteer-opportunities-list-row-54`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 54
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: SF-Marin Food Bank
- area_of_focus: Food bank
- location: San Francisco, Marin
- website: https://www.sfmfoodbank.org/volunteer/
- contact: info@sfmfoodbank.org or 415.282-1900

#### Record: St. Anthony's Foundation
- record_id: `volunteer-opportunities-list-row-55`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 55
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: St. Anthony's Foundation
- area_of_focus: Provides essential support to San Franciscans living in poverty
- location: San Francisco
- website: https://www.stanthonysf.org/volunteer/

#### Record: St. Anthony's Padua Dining Room
- record_id: `volunteer-opportunities-list-row-56`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 56
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: St. Anthony's Padua Dining Room
- area_of_focus: Provides meals daily throughout the year
- location: Menlo Park
- website: http://paduadiningroom.com/?page_id=24
- notes: Please email paduadiningroom@gmail.com from your preferred contact email, or call our volunteer coordinator at (650) 365-9664.

#### Record: St. Vincent de Paul
- record_id: `volunteer-opportunities-list-row-57`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 57
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: St. Vincent de Paul
- area_of_focus: Provides food, clothing, survival necessities, and other resources to those in need
- location: San Mateo County
- website: http://svdpsm.org/volunteer/
- contact: 650.373.0622

#### Record: Strides for Life Colon Cancer
- record_id: `volunteer-opportunities-list-row-58`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 58
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Strides for Life Colon Cancer
- area_of_focus: Prevention and early detection of colon cancer
- location: Various
- website: https://www.stridesforlife.org/youth-impact

#### Record: Surfrider Foundation
- record_id: `volunteer-opportunities-list-row-59`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 59
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Surfrider Foundation
- area_of_focus: Dedicated to the protection and enjoyment of the world’s oceans, waves and beaches
- location: San Mateo County
- website: https://smc.surfrider.org/volunteer
- contact: communications@smc.surfrider.org

#### Record: Sutro Stewards
- record_id: `volunteer-opportunities-list-row-60`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 60
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Sutro Stewards
- area_of_focus: Trail building and maintenance, habitat improvement projects
- location: Mount Sutro Open Space Reserve, San Francisco
- website: https://www.sutrostewards.org/get_involved
- notes: Two waivers are required for volunteers under age 18. Check Events Calendar.

#### Record: United Service Organization
- record_id: `volunteer-opportunities-list-row-61`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 61
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: United Service Organization
- area_of_focus: Keeps America's military service members connected to family, home and country
- location: Various
- website: https://www.uso.org/take-action/volunteer
- contact: https://www.uso.org/contact
- notes: Limited for 15-17 year olds. Complete form https://volunteers.uso.org/?nd=vms_public_form&form_id=59&_ga=2.61825324.1622696422.1611345685-1585989722.1611345685

#### Record: Wonder Dog Rescue
- record_id: `volunteer-opportunities-list-row-62`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 62
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Wonder Dog Rescue
- area_of_focus: Dog rescue, support, foster, adoption
- location: San Francisco
- website: http://www.wonderdogrescue.org/volunteer
- contact: info@wonderdogrescue.org or 415.621.3647

#### Record: Youth Climate Ambassadors
- record_id: `volunteer-opportunities-list-row-63`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Volunteer Opportunities List`
- source_row: 63
- source_category: Volunteer Opportunities Immediately or Regularly Available - see highlighted organizations. These opportunities are not endorsed or sponsored by the SMUHSD.
- agency_name: Youth Climate Ambassadors
- area_of_focus: The Youth Climate Ambassadors (YCA) Leadership Program aims to ensure younger generations have the skills and knowledge to play a leadership role in taking action on climate change.
- location: San Mateo County
- website: https://www.smcsustainability.org/climate-change/youth-programs/youth-climate-ambassador/
- notes: Check back in July 2024 for news about 2024/2025 program

### Sheet: Job Board

- source_file: `SMUHSD Career Center Opportunities.xlsx`
- sheet_name: `Job Board`
- non_empty_rows: 56

- interpreted_header_row: 5

#### Source Row 1 (header/note)
- column_1: NOTE: The inclusion of a job in these listings is not an endorsement or recommendation by the SMUHSD.

#### Source Row 2 (header/note)
- column_1: Students and parents should look closely into any jobs they are considering. Please review the provided information in the lists as well as their website for additional details.

#### Source Row 3 (header/note)
- column_1: REMINDER: Students under 18 will need to obtain a Work Permit from their school's College and Career Center before beginning a new job.

#### Source Row 4 (header/note)
- column_1: EMPLOYMENT OPPORTUNITIES
- column_3: UPDATED: 5/21/24

#### Source Row 5 (header/note)
- column_1: Name
- column_2: Position
- column_3: Description
- column_4: Deadline
- column_5: Website
- column_6: Grade / Age Requirement
- column_7: Compensation
- column_8: Date Reviewed

#### Category / Section: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.

#### Record: City of San Mateo
- record_id: `job-board-row-7`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 7
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: City of San Mateo
- position: Various positions
- description: City of San Mateo is looking for students who love working with kids as well as the community! Use the link to see the various jobs available
- deadline: Until filled
- website: https://www.cityofsanmateo.org/4221/Summer-Jobs
- grade_age_requirement: 16+
- compensation: Part Time
- date_reviewed: 2024-05-21

#### Record: National Academy of Athletics
- record_id: `job-board-row-8`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 8
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: National Academy of Athletics
- position: Summer Sports Camp Coaches
- description: |
  If you are enthusiastic, passionate, responsible and athletic, apply now! 
  We are looking for energetic and inspiring sports coaches in San Mateo County. We provide kids 4-13 years old with an exceptional sports camp experience. Requirements:
  
  Must have some sports knowledge
  Must love working with kids
  Must have exceptional verbal communication skills
  Must have excellent customer service skills
  Must be punctual and reliable
- deadline: Until filled
- website: https://nationalacademyofathletics.com/
- grade_age_requirement: 16+
- compensation: Part Time/Seasonal
- date_reviewed: 2024-05-21

#### Record: Nick the Greek
- record_id: `job-board-row-9`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 9
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Nick the Greek
- position: Cashier
- description: Nick the Greek is looking for 10 cashiers to join our team. Our ideal candidate is self-driven, motivated and reliable
- deadline: Until filled
- website: https://www.nickthegreek.com/ Contact George at 650-490-0762
- grade_age_requirement: 16+
- compensation: Part time
- date_reviewed: Verifying openings 5/21/24

#### Record: Dance Theatre Shop
- record_id: `job-board-row-10`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 10
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Dance Theatre Shop
- position: Shop associate
- description: |
  Must be 16 yrs old
  
  Go in person or email Julia Forte @ dancetheatreshop@gmail.com
  
  414 S. ELLSWORTH AVE.
  SAN MATEO, CA 
  94401
  650-340-7066
- deadline: Until Filled
- website: https://shop.dancetheatreshop.com/
- grade_age_requirement: 16+
- compensation: Part time
- date_reviewed: No answer. 5/21/24

#### Record: Safari Run
- record_id: `job-board-row-11`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 11
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Safari Run
- position: Party Host
- description: |
  A Party Host help’s guest with any and all birthday party needs. Duties
  include: taking care of guest belongings, playing and leading games,
  monitoring play structure, serving food and drinks, helping with arcade room
  tokens, tickets and prizes, helping guest with gifts and leftover food to car.
- deadline: Until filled
- website: https://www.safarirun.com/index/employment
- grade_age_requirement: 14+
- date_reviewed: 2024-05-21

#### Record: CVS
- record_id: `job-board-row-12`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 12
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: CVS
- position: Retail associate
- description: Providing customer service and working as a cashier.
- deadline: Until filled
- website: https://jobs.cvshealth.com/job-search-results/?location=San%20Bruno%2C%20CA%2C%20USA&latitude=37.6304904&longitude=-122.4110835&radius=10
- grade_age_requirement: 16+
- compensation: Part time
- date_reviewed: 2024-05-21

#### Record: Pump it up
- record_id: `job-board-row-13`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 13
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Pump it up
- position: Shift leads, party coordinators
- description: |
  Pump it up is a private indoor playground and a favorite party place for kids. Two
  huge arenas filled with gigantic bounce houses and obstacle courses and more. We offer guests a
  safe, clean and fun environment to celebrate a child’s only Birthday Party of the year. All of this
  is only possible with a team of fun-loving, energetic, and passionate staff members who make
  our guests’ experience a memorable one.
- deadline: Until filled
- website: https://www.pumpitupparty.com/
- grade_age_requirement: 15+
- compensation: Part time
- date_reviewed: 2024-05-21

#### Record: Five Guys
- record_id: `job-board-row-14`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 14
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Five Guys
- position: Crew Member
- description: |
  So, what's it take to be a successful Five Guys crew member?
  
  Energy & Stamina – it's a team-based work environment and crew energy is important.
  Ability To Work At A Fast Pace – Our kitchen's have a lot going on and there's lots of on-the-line communication and job rotation. It's not for everybody.
  Good Communication – Our crew is vocal and supports and works with each other on what's happening real-time during each shift.
  Love For Burgers and Classic Rock and Roll – We make some of the best burgers and fries in the biz and do it to the sounds of classic rock and roll. Yes, singing is encouraged.
  Caring About Your Teammates – Always working for the success of your team.
- deadline: Until filled
- website: https://www.joinfiveguys.com/job/crew-member-food-service-us-ca-san-bruno-1150-el-camino-real-6163903-4199/
- grade_age_requirement: 16+
- compensation: Part time
- date_reviewed: 2024-05-21

#### Record: Journey's
- record_id: `job-board-row-15`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 15
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Journey's
- position: Multiple positions
- description: |
  Meet and exceed personal sales goal and standards of performance.
  Be aware of store sales goal.
  Provide a fun, full service experience to all customers.
  Complete all point of sale functions as required.
  Complete all assigned tasks and responsibilities promptly.
  Perform all Operational/Loss Prevention procedures accurately according to policies.
  Maintain store appearance and stockroom organization.
  Effectively communicate all store needs to management
  Stay informed of current fashion trends.
  Complete all required training.
  Understand the Journeys culture and demonstrate it to the team.
- deadline: Until filled
- website: https://cta.cadienttalent.com/index.jsp?locale=en_US&applicationName=JourneysNonReqExt&seq=locationDetails&deviceMode=desktop&location_id=46175745064
- grade_age_requirement: 16+
- compensation: Full time/Part Time
- date_reviewed: 2024-05-21

#### Record: Hot Topic
- record_id: `job-board-row-16`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 16
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Hot Topic
- position: Sales Associate/Key Holder
- description: Join the loudest store in the mall! We're looking for music and pop culture fanatics to help create the best experience for our customers. As a Hot Topic Sales Associate, you'll be a huge part of our success by providing the best customer service, ensuring that fellow fans are able to get their hands on the Merch they love. You'll share your fandom knowledge, stock and replenish product, and help merchandise the store in a visually appealing way, all while being hyper focused on the in-store experience.
- deadline: Until filled
- website: https://www.workatht.com/job-description/?stores=true&id=a8d5d3ed-4115-47b1-82ce-3744a8fe1de0
- grade_age_requirement: 16+
- compensation: Part time
- date_reviewed: 2024-05-21

#### Record: Quick Quack Car Wash
- record_id: `job-board-row-17`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 17
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Quick Quack Car Wash
- position: Team member
- description: |
  Quick Quack Car Wash is looking for Smart, Kind, and Driven individuals who want to contribute to a fun atmosphere. Our team members help hundreds of customers a day while enjoying the beautiful outdoor scenery!
  
  Apply today and help us to be Fast, Clean, and Loved…Everywhere!
- deadline: Until filled
- website: https://www.dontdrivedirty.com/jobs/
- grade_age_requirement: 16+
- compensation: Full time/Part Time
- date_reviewed: |
  5/21/24
  Millbrae jobs

#### Record: Barnes & Noble
- record_id: `job-board-row-18`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 18
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Barnes & Noble
- position: Barista, Bookseller
- description: To be a great bookseller, you provide excellent customer service which is friendly, genuine and professional, and you always put the customers first ahead of everything and anything else. You make the shopping experience engaging and interactive by enthusiastically sharing your knowledge whether face to face or over the phone, helping a customer choose a new book, or a special gift. A bookseller creates enticing displays which are neat, tidy, and vibrant to the customer. Your passion for bookselling and willingness to help, ensures your customers look forward to coming into your store. From creating inspiring displays to helping at our special events, there is always an opportunity to demonstrate initiative and your passion for books and people.
- deadline: |
  Positions Currently
  Not Available
  Check available jobs 
  by Zip Code
- website: https://barnesandnoble.dejobs.org/san-bruno-ca/bookseller-pt/287ED25D45224320A369C801C6400D0E/job/
- grade_age_requirement: 16+
- compensation: Part time
- date_reviewed: |
  5/21/24 
  no positions

#### Record: Salt & Straw
- record_id: `job-board-row-19`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 19
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Salt & Straw
- position: Multiple positions
- description: |
  The most delicious decision youll make: Join our Team!
  
  We make magical ice cream to create happiness through moments of wonder. We believe in our culture, an amazing work environment, and endless ice cream not to mention competitive benefits and great growth opportunities!
- website: https://saltandstraw.com/pages/careers
- grade_age_requirement: 16+
- compensation: $15/hr
- date_reviewed: |
  5/21/24
  Burlingame jobs

#### Record: Lunardi's
- record_id: `job-board-row-20`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 20
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Lunardi's
- position: Store associate
- description: Multiple locations hire including San Bruno & Burlingame! Contact store to verify open positions. Apply on link provided.
- deadline: Until Filled
- website: https://form.jotformpro.com/41496005892964
- grade_age_requirement: 16+
- compensation: Available upon request
- date_reviewed: 2024-05-21

#### Record: Cinemark Theatre
- record_id: `job-board-row-21`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 21
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Cinemark Theatre
- position: Theatre team member
- description: |
  Join Our Team!
  
  Do you enjoy working together as a team to accomplish major goals? Join Cinemark to utilize and expand your skills! We are dedicated to making the movie experience memorable, “One Guest at a time.” Our world class talent creates a warm and friendly culture through shared values
- deadline: Until Filled
- website: https://careers.cinemark.com/search/searchjobs
- grade_age_requirement: 16+
- compensation: Available upon request
- date_reviewed: |
  5/21/24 
  San Mateo
  San Bruno
  Daly City 
  job openings

#### Record: The Habit Burger
- record_id: `job-board-row-22`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 22
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: The Habit Burger
- position: Cooks & Cashiers
- description: One bite of a hot, juicy Charburger and suddenly you’re in Santa Barbara, California, 1969. After all, it was in that picturesque, coastal Southern California town, in the same year that the first astronauts landed on the moon, that the original Habit Burger Grill opened its doors. Soon after, an entrepreneurial young employee and his equally enterprising brother—both on a mission to provide a great burger at a great price—borrowed money from their mom to buy the unassuming restaurant nestled amongst the Spanish Colonial architecture of Goleta Beach and nearby bungalow homes.
- deadline: Until Filled
- grade_age_requirement: 16+
- compensation: Available upon request
- date_reviewed: |
  5/21/24
  Check Millbrae
  Daly City

#### Record: Chipotle
- record_id: `job-board-row-23`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 23
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Chipotle
- position: Restaurant team member
- description: At Chipotle, we’ve created a better place to eat and work. Many employees start just expecting a paycheck, but end up with a rewarding career. We provide exceptional training and a clear career path – over 80% of our managers were promoted from Crew. We prepare real food by hand every day in our restaurants. No freezers, microwaves or can openers to be found.
- deadline: Until Filled
- website: https://jobs.chipotle.com/search-jobs
- grade_age_requirement: 16+
- date_reviewed: 2024-05-21

#### Record: Sephora - Multiple Locations
- record_id: `job-board-row-24`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 24
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Sephora - Multiple Locations
- position: Sales & Service, Beauty Advisors, Seasonal Beauty Advisors
- description: As a Sales and Service Coordinator, you'll be a key player in our mission to provide an exceptional shopping experience for every client. You'll support all aspects of sales and service initiatives, including paid services, events, classes, loyalty programs, cash handling, and training in your store. If you have a passion for retail sales and service and love being part of a team, this is the perfect role for you.
- deadline: Until Filled
- website: https://jobs.sephora.com/viewalljobs/250/?locale=en_US
- grade_age_requirement: 18+
- compensation: Full Time
- date_reviewed: 2024-05-21

#### Record: Nothing Bundt Cakes
- record_id: `job-board-row-25`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 25
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Nothing Bundt Cakes
- position: Guest Service Rep, Froster, Dishwasher/Utilities
- description: Each individual hired will begin as guest service representatives
- deadline: Until Filled
- website: https://nothing-bundt-cakes-careers.careerplug.com/jobs/?location=0084&fulfillment=5/21/2024
- grade_age_requirement: 16+
- compensation: Available upon request
- date_reviewed: 2024-05-21

#### Record: Bath and Body Works
- record_id: `job-board-row-26`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 26
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Bath and Body Works
- position: Sales Associate/Key Holder
- description: |
  Lead and model the selling and customer experience standards
  Lead selling efforts to meet selling goals during scheduled shifts
  Ensure associates consistently execute to the selling model
  Display knowledge of product, company policies and store strategies
  Set the direction and goals for the day/shift when associates arrive for work
  Build highly satisfied and loyal customer base through engagement, conversion and capturing customer phone and e-mail
  Assist in meeting payroll targets by ensuring appropriate sales floor coverage (manage call-ins / call-offs)
  Ensure associates receive scheduled breaks and meal periods (per state specific guidelines)
  Telling The Brand Story:
- deadline: Until Filled
- website: https://careers.bathandbodyworks.com/en/job-2/13504742/bbw-key-holder-the-shops-at-tanforan-san-bruno-ca/
- grade_age_requirement: 16+
- compensation: Available upon request
- date_reviewed: |
  5/21/24 
  Serramonte Ctr
  Hillsdale Mall

#### Record: Target
- record_id: `job-board-row-27`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 27
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Target
- position: Mulitple positions
- description: Wherever and however Target fits into your career path, our belief stays the same: don’t just work somewhere, work somewhere you love. Explore our career areas to learn more!
- deadline: Until Filled
- website: https://jobs.target.com//
- grade_age_requirement: 16+
- compensation: Available upon request
- date_reviewed: |
  5/21/24
  Check
  San Mateo
  Daly City

#### Record: In and Out Burger
- record_id: `job-board-row-28`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 28
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: In and Out Burger
- position: Restaurant Member
- description: We provide competitive hourly rates and a friendly team-oriented environment for our restaurant Associates. Some highlights include:
- deadline: Until Filled
- website: https://www.in-n-out.com/employment
- grade_age_requirement: 16+
- date_reviewed: 2024-05-21

#### Record: Round Table - SSF
- record_id: `job-board-row-29`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 29
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Round Table - SSF
- position: Host, Busser, Server Assistant and Server Opportunities
- deadline: Until Filled
- website: https://www.roundtablepizza.com/careers?_ga=2.135303473.1055772319.1632169451-921284157.1632169451
- grade_age_requirement: 17+/Senior in HS
- date_reviewed: 2024-05-21

#### Record: Cinepolis
- record_id: `job-board-row-30`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 30
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Cinepolis
- position: Runner
- description: Runners ensure orders are delivered correctly and promptly, and that the guests have all that they need to enjoy the film and their meal. Their enthusiasm, attention to detail, and hospitality are what sets our dining in experience apart from the rest.
- deadline: Until Filled
- website: https://www.cinepolisusa.com/careers/
- grade_age_requirement: 16+
- compensation: Available upon request
- date_reviewed: 2024-05-21

#### Record: Highlands Recreation
- record_id: `job-board-row-31`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 31
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Highlands Recreation
- position: Swim Instructor
- description: Under the supervision of the Aquatics Supervisor and/or Aquatics Coordinator, this position provides swim instruction to adults and children and conducts related work as required. Swim Instructors teach, supervise, and assess students of all ages and abilities.
- deadline: Until Filled
- website: https://recruiting.paylocity.com/Recruiting/Jobs/Details/534818
- grade_age_requirement: 16+
- date_reviewed: 2024-05-21

#### Record: Burger King
- record_id: `job-board-row-32`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 32
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Burger King
- position: Team member
- description: The Team Member is responsible for providing exceptional guest service while working closely with the Restaurant Managers and other Team Members to maintain operational standards and procedures. This position operates under the direction of the General Manager, Assistant Managers, and Shift Coordinators. This position has direct interactions with Guests and members of the field operations team.
- deadline: Until filled
- website: https://careers.bk.com/search
- grade_age_requirement: 16+
- compensation: Part time
- date_reviewed: 2024-05-21

#### Record: Peninsula Golf
- record_id: `job-board-row-33`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 33
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Peninsula Golf
- position: Lifeguard
- description: |
  Ensure safety in and around pool area at all times.
  
  Anticipate hazardous conditions and take precautionary measures.
  
  Maintain pool area to that it is kept clean and safe at all times.
  
  Create a warm and welcoming environment for all members.
  
  Attend all mandatory inservices.
- deadline: Until filled
- website: https://www.thepgcc.org/contact-us/employment
- grade_age_requirement: 15+
- compensation: $15.62/hr
- date_reviewed: 2024-05-21

#### Record: Jamba Juice
- record_id: `job-board-row-34`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 34
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Jamba Juice
- position: Shift manager/Shift Lead/Team member
- description: At Jamba Juice you can go as far as your dreams will take you. We believe in growth, so we actively support your advancement as both an employee and a person. No sweating over a fry vat here! Be part of a fresh, fun team that has tons of healthy energy and a smile with every smoothie. This could be your rewarding start to a great career, or simply one of the coolest part-time gigs around!
- deadline: Until filled
- website: https://careers.jamba.com/
- grade_age_requirement: 15+
- date_reviewed: 2024-05-21

#### Record: Peet's Coffee/Multiple locations
- record_id: `job-board-row-35`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 35
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Peet's Coffee/Multiple locations
- position: Shift lead
- description: Peet's is currently seeking passionate Shift Leads. The Shift Lead models the unwavering commitment to mastery by ensuring unequaled quality and service. They focus on daily operations of the store including Service Leader, while ensuring excellent customer service.
- deadline: Until filled
- website: https://www.peets.com/pages/careers
- grade_age_requirement: 16+
- date_reviewed: 2024-05-21

#### Record: Starbucks
- record_id: `job-board-row-36`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 36
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Starbucks
- position: Barista
- description: We're not just passionate purveyors of coffee, but everything else that goes with a full and rewarding coffeehouse experience. We also offer a selection of premium teas, fine pastries and other delectable treats to please the taste buds. And the music you hear in store is chosen for its artistry and appeal.
- deadline: Until filled
- website: https://careers.starbucks.com/
- grade_age_requirement: 16+
- date_reviewed: 2024-05-21

#### Record: Palette Tea Garden
- record_id: `job-board-row-37`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 37
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Palette Tea Garden
- position: Busser/Server assistant
- description: Palette Tea Garden is located in the heart of the peninsula, in the New North Wing of Hillsdale Shopping Mall in San Mateo. Founded by the family of Koi Palace, Dragon Beaux, and Palette Tea House, Palette Tea Garden introduces a new approach to modern Chinese food like dim sum, seafood, and barbecue, yet remaining familiarly authentic.
- deadline: Until filled
- website: https://www.paletteteagarden.com/
- grade_age_requirement: 16+
- date_reviewed: 2024-05-21

#### Record: Athleta
- record_id: `job-board-row-38`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 38
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Athleta
- position: Brand Associate
- description: We’re searching for Brand Associates to join our team – no experience needed – friendly and eager to learn is what we are looking for! As a Brand Associate, you’re an important part of our team and take pride in the brand to deliver a great shopping experience for our customers. You will support your team to drive results, deliver best-in-class service and educate customers on our loyalty programs. You enjoy a fast-paced environment and have a customer-first mindset.
- deadline: Until filled
- website: https://www.gapinc.com/en-us/jobs/35/40/brand-associate-burlingame-ave?rx_campaign=indeed0&rx_group=116953&rx_job=354062&rx_r=none&rx_source=Indeed&rx_ts=20210414T175059Z&src=JB-10324
- grade_age_requirement: 16+
- compensation: See website
- date_reviewed: 2024-05-21

#### Record: Gap Inc
- record_id: `job-board-row-39`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 39
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Gap Inc
- position: Multiple positions
- description: We’re searching for Brand Associates to join our team – no experience needed – friendly and eager to learn is what we are looking for! As a Brand Associate, you’re an important part of our team and take pride in the brand to deliver a great shopping experience for our customers. You will support your team to drive results, deliver best-in-class service and educate customers on our loyalty programs. You enjoy a fast-paced environment and have a customer-first mindset.
- deadline: Until filled
- website: https://www.gapinc.com/en-us/jobs/34/84/brand-associate-hillsdale
- grade_age_requirement: 16+
- compensation: See website
- date_reviewed: 2024-05-21

#### Record: Ike's Place
- record_id: `job-board-row-40`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 40
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Ike's Place
- position: Host, Busser, Server Assistant and Server Opportunities
- description: Award winning sandwiches & full service catering
- deadline: Until filled
- website: https://nowhiring.com/ikescareers/?start=0&rad=1000&sort=distance&view=list&location=san%20mateo#job-results
- grade_age_requirement: 16 years or older
- compensation: See website
- date_reviewed: 2024-05-21

#### Record: Mathnasium
- record_id: `job-board-row-41`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 41
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Mathnasium
- position: Math Tutor
- description: We teach math in a way that makes sense to students in 1st grade through High School. Join us for the opportunity to make a REAL difference in a child’s life by passing on a love for math! We offer part-time jobs with flexible scheduling and ongoing training opportunities. Advancement and leadership opportunities are available for top performers.
- deadline: Until filled
- website: https://www.mathnasium.com/laurelwood/employment
- grade_age_requirement: 16 years or older
- compensation: |
  See website
  Search by city
- date_reviewed: 2024-05-21

#### Record: Legarza Sports
- record_id: `job-board-row-42`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 42
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Legarza Sports
- position: Youth Sports Coach
- description: In this position young adults will gain valuable experience in a professional environment. They will develop their interpersonal skills when speaking with campers, parents, as well as school administration. In addition, they will have the opportunity to grow within an organization expanding throughout the Bay Area. Our hours of work are flexible, allowing student-athletes to attend practices and meetings while working with us. This is also a great way for athletes to make some extra cash while building their resume.
- deadline: Until filled
- website: https://www.legarzasports.org/summer-jobs/
- grade_age_requirement: 16 years or older
- date_reviewed: 2024-05-21

#### Record: City of Millbrae
- record_id: `job-board-row-43`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 43
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: City of Millbrae
- position: Recreation Leader
- description: Under close supervision, learns, assists with, and performs a variety of activities in support of recreation programs, facilities, and activities; may be assigned to assist with one or more areas, including, but not limited to, summer camp programs, facility support, coaching, administrative support, and/or pre-school programs; performs related duties as assigned.
- deadline: Until filled
- website: https://www.calopps.org/city-of-millbrae
- grade_age_requirement: 15 years or older
- compensation: Part time
- date_reviewed: 2024-05-21

#### Record: La Petite Baleen
- record_id: `job-board-row-44`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 44
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: La Petite Baleen
- position: Swim teacher
- description: Must be 16 years of age, Swimming experience is a plus, Experience working with children is a plus, able to attend in and out of water sessions (4-5 weeks, 10 hours a week), Paid training provided/no experience needed, strong communication skills.
- deadline: Until filled
- website: https://www.swimlpb.com/career-opportunities
- grade_age_requirement: 16 years old and up
- compensation: part time
- date_reviewed: 2024-05-21

#### Record: Camp Keff
- record_id: `job-board-row-45`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 45
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Camp Keff
- position: Camp counselor
- description: No experience necessary, see flyer for more info. Competitive pay, paid training, free gym access all summer
- website: https://campkeff.org/join-our-team/
- grade_age_requirement: |
  graduating seniors
  rising seniors
- date_reviewed: 2024-05-21

#### Record: Burlingame Parks and Recreation
- record_id: `job-board-row-46`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 46
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Burlingame Parks and Recreation
- position: Basketball coach, Badminton coach and Lacrosse coach
- description: Youth Sports Coaches for the Spring season at Burlingame Parks and Recreation
- deadline: Email to confirm
- website: |
  Molly Kaplan 
  Email Recreation Coordinator
  mkaplan@burlingame.org
- grade_age_requirement: 16-18 years old
- compensation: Part time
- date_reviewed: 2024-05-21

#### Record: Mathnasium, the Math Learning Center
- record_id: `job-board-row-47`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 47
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Mathnasium, the Math Learning Center
- position: Math Tutor
- description: |
  Required Qualifications: 
  ● Exceptional math skills through Algebra I and Geometry 
  ● Excellent communication and multi-tasking skills 
  ● Ability to professionally interact with students and parents 
  ● Energetic and confident personality 
   *****Send your resume and cover letter to careers@mathnasiumworks.com to start the application process. In your email, please include the location you are interested in working in. ***This position is on site at the Mathnasuim locations. This is an in-person opportunity. Students should be clear about what the employer is doing to protect its employees, including safety measures and how these measures are implemented at each location.
- deadline: We hire year-round, so your inquiry will be read.
- website: https://www.mathnasium.com/fostercity/employment
- grade_age_requirement: Current Juniors or Seniors in High SchooL
- compensation: Hours: 6 - 23 hours/week (flexible)
- date_reviewed: 2024-05-21

#### Record: New York Pizza
- record_id: `job-board-row-48`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 48
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: New York Pizza
- position: Host, Busser, Server Assistant and Server Opportunities
- website: Interested? Please contact Mr. Shaghasi (510) 209-8235 or Shaghasi@gmail.com
- grade_age_requirement: Must be 16 yrs old

#### Record: Galileo Camps
- record_id: `job-board-row-49`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 49
- source_category: THIS JOB LIST WILL BE UPDATED. Please contact the employer or check their website for the most current information.
- name: Galileo Camps
- position: Camp counselor
- description: This year, we’re looking for more than 1,800 exceptional educators, experienced leaders, working professionals, college and high school students who will make career-defining discoveries while inspiring upwards of 25,000 Galileo campers at 50+ locations throughout the Bay Area, SoCal, and Chicago. Check out how we’re bringing back in-person summer programming through our COVID-safety redesigns.
- website: https://galileo-camps.com/jobs/program-staff/?_ga=2.17590585.1888397547.1612724013-1592259099.1602870707
- grade_age_requirement: 16 and up
- compensation: Summer
- date_reviewed: 2024-05-21

#### Category / Section: JOBS BELOW MAY NO LONGER BE AVAILABLE - CHECK WITH EMPLOYER DIRECTLY

#### Record: Cost Plus World Market
- record_id: `job-board-row-52`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 52
- source_category: JOBS BELOW MAY NO LONGER BE AVAILABLE - CHECK WITH EMPLOYER DIRECTLY
- name: Cost Plus World Market
- position: Seasonal Sales Associate, Seasonal Stock Associate
- website: https://www.worldmarketcorp.com/careers/
- date_reviewed: 2024-05-21

#### Record: Old Navy
- record_id: `job-board-row-53`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 53
- source_category: JOBS BELOW MAY NO LONGER BE AVAILABLE - CHECK WITH EMPLOYER DIRECTLY
- name: Old Navy
- position: Brand Associate
- description: Details here (https://www.gapinc.com/en-us/jobs/34/70/brand-associate-hillsdale)
- website: Gap Inc. (https://www.gapinc.com/en-us/careers/job-search?brand=Old%20Navy&currentPage=1&sort=geodistance&lat=37.5629917&long=-122.3255254&location=San%20Mateo,%20California)
- grade_age_requirement: 17 +
- date_reviewed: 2024-05-21

#### Record: Five Guys Burgers & Fries - multiple locations
- record_id: `job-board-row-54`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 54
- source_category: JOBS BELOW MAY NO LONGER BE AVAILABLE - CHECK WITH EMPLOYER DIRECTLY
- name: Five Guys Burgers & Fries - multiple locations
- position: Crew Member
- description: Customer service, cashier and more!
- deadline: Ongoing
- website: http://www.fiveguys.com/Careers
- grade_age_requirement: Minimum 16 years old
- date_reviewed: 2024-05-21

#### Record: Home Depot - San Mateo
- record_id: `job-board-row-55`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 55
- source_category: JOBS BELOW MAY NO LONGER BE AVAILABLE - CHECK WITH EMPLOYER DIRECTLY
- name: Home Depot - San Mateo
- position: Multiple Positions
- description: See website for all job descriptions.
- deadline: Ongoing
- website: https://careers.homedepot.com/?utm_campaign=2017Q1&utm_medium=signage&utm_source=vanityurl%3Fcm_sp%3Dvanity-_-careers-_-JAN17
- grade_age_requirement: Minimum 18 years old
- date_reviewed: 2024-05-21

#### Record: Mathnasium - San Mateo, Foster City, Burlingame
- record_id: `job-board-row-56`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 56
- source_category: JOBS BELOW MAY NO LONGER BE AVAILABLE - CHECK WITH EMPLOYER DIRECTLY
- name: Mathnasium - San Mateo, Foster City, Burlingame
- position: Math Instructor
- description: Teach math to students in 1st grade thru high school. Required qualifications include exceptional math skills through Algebra 1 and Geometry.
- deadline: Ongoing
- website: http://www.mathnasium.com/careers
- grade_age_requirement: Rising 11th-13th graders
- date_reviewed: 2024-05-21

#### Record: UPS (United Parcel Service) - South San Francisco
- record_id: `job-board-row-57`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `Job Board`
- source_row: 57
- source_category: JOBS BELOW MAY NO LONGER BE AVAILABLE - CHECK WITH EMPLOYER DIRECTLY
- name: UPS (United Parcel Service) - South San Francisco
- position: Part-Time Package Handlers
- description: Work with team behind the scenes at UPS. Many shifts available. Part-time package handlers are eligible to receive up to $25,000 educational assistance benefit good towards college, trade school or technical school.
- deadline: Ongoing
- website: https://www.jobs-ups.com/
- grade_age_requirement: Minimum 18 years old
- date_reviewed: 2024-05-21

### Sheet: CareerEducational Events

- source_file: `SMUHSD Career Center Opportunities.xlsx`
- sheet_name: `CareerEducational Events`
- non_empty_rows: 10

- interpreted_header_row: 1

#### Source Row 1 (header/note)
- column_1: Event Name
- column_2: Sponsor
- column_3: Date
- column_4: Time
- column_5: Registration information
- column_6: Grade level
- column_7: Career Coordinator contact info
- column_8: Area of focus

#### Record: NOTE: The inclusion of a program in this listing is not an endorsement or recommendation by the SMUHSD.
- record_id: `careereducational-events-row-2`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `CareerEducational Events`
- source_row: 2
- event_name: NOTE: The inclusion of a program in this listing is not an endorsement or recommendation by the SMUHSD.

#### Record: San Mateo Police Dept. Explorers Program
- record_id: `careereducational-events-row-3`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `CareerEducational Events`
- source_row: 3
- event_name: San Mateo Police Dept. Explorers Program
- sponsor: City of San Mateo
- date: Mon. 8/31/2020
- time: 4:00-5:00 pm
- career_coordinator_contact_info: nkane@smuhsd.org

#### Record: Lincoln Financial
- record_id: `careereducational-events-row-4`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `CareerEducational Events`
- source_row: 4
- event_name: Lincoln Financial
- sponsor: Lincoln Financial
- date: Wed. 9/9/2020
- time: 3:00-3:30 pm
- registration_information: https://docs.google.com/forms/d/e/1FAIpQLSf2hRmJ0CdhVc7xFy9RpcJI9QvbEIlaHRHJqYEiTWBBTifdzQ/viewform
- career_coordinator_contact_info: lhockaday@smuhsd.org

#### Record: Academy of Art
- record_id: `careereducational-events-row-5`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `CareerEducational Events`
- source_row: 5
- event_name: Academy of Art
- sponsor: Academy of Art
- date: Mon. 9/14/2020
- time: 12:00-1:00 pm
- career_coordinator_contact_info: lhockaday@smuhsd.org

#### Record: Academy of Art
- record_id: `careereducational-events-row-6`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `CareerEducational Events`
- source_row: 6
- event_name: Academy of Art
- sponsor: Academy of Art
- date: Wed. 9/16/2020
- time: 3:00-4:00 pm
- career_coordinator_contact_info: lhockaday@smuhsd.org

#### Record: Build Your Professional Reputation and Network Workshop
- record_id: `careereducational-events-row-7`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `CareerEducational Events`
- source_row: 7
- event_name: Build Your Professional Reputation and Network Workshop
- sponsor: Junior Achievement JA and LinkedIn
- date: Fri. 9/18/2020
- time: 11:30-12:15, 1:30-2:15
- registration_information: https://www.signupgenius.com/go/60b0b49abaa23a4f94-indays
- career_coordinator_contact_info: chermann@smuhsd.org

#### Record: JA/ABC7 Virtual Town Hall: Financial Literacy in a Pandemic State of Mind
- record_id: `careereducational-events-row-8`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `CareerEducational Events`
- source_row: 8
- event_name: JA/ABC7 Virtual Town Hall: Financial Literacy in a Pandemic State of Mind
- sponsor: Junior Achievement JA and ABC7
- date: Thurs. 9/24/2020
- time: 3:00-4:00 pm
- registration_information: https://secure.qgiv.com/for/jthe/
- career_coordinator_contact_info: chermann@smuhsd.org
- area_of_focus: Plan and strategize for a succesful financial future.

#### Record: SCU Virtual Engineering Seminar
- record_id: `careereducational-events-row-9`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `CareerEducational Events`
- source_row: 9
- event_name: SCU Virtual Engineering Seminar
- sponsor: Santa Clara University
- date: Sun.10/11, Sun. 10/18/2020
- time: 12:00-2:00 pm
- registration_information: https://www.scu.edu/engineering/beyond-the-classroom/outreach/virtual-engineering-seminar-ves/
- grade_level: 2020-10-12
- career_coordinator_contact_info: chermann@smuhsd.org
- area_of_focus: Engineering

#### Record: Women In Engineering
- record_id: `careereducational-events-row-10`
- source_file: `SMUHSD Career Center Opportunities.xlsx`
- source_sheet: `CareerEducational Events`
- source_row: 10
- event_name: Women In Engineering
- sponsor: Society of Women Engineers (SWE) at UC Davis
- date: 10 week long mentorship program beginning 9/24/2020
- time: 5:00 pm-6:00 pm
- registration_information: http://bit.ly/swe-prospective
- area_of_focus: Engineering

---

## Workbook Source Data: Career Training Programs

### Sheet: Career Pathways 

- source_file: `Career Training Programs.xlsx`
- sheet_name: `Career Pathways `
- non_empty_rows: 265

- interpreted_header_row: 2

#### Source Row 2 (header/note)
- column_1: Pathway
- column_2: Program Name & Link
- column_3: Location
- column_4: A Day in the Life...watch/listen to someone already in this position

#### Record: These are non-SMUHSD sponsored programs. Information is subject to change. Please consult websites to learn more.
- record_id: `career-pathways-row-3`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 3
- pathway: These are non-SMUHSD sponsored programs. Information is subject to change. Please consult websites to learn more.

#### Category / Section: AGRICULTURE & NATURAL RESOURCES
- column_4: updated 9/11/2025

#### Record: Apprentice Gardener (https://www.jobapscloud.com/SF/specs/classspecdisplay.asp?ClassNumber=3410)
- record_id: `career-pathways-row-5`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 5
- source_category: AGRICULTURE & NATURAL RESOURCES
- program_name_link: Apprentice Gardener (https://www.jobapscloud.com/SF/specs/classspecdisplay.asp?ClassNumber=3410)
- location: City & County of San Francisco

#### Record: Apprentice Arborist Technician (https://sfdhr.org/apprenticeshipsf-programs)
- record_id: `career-pathways-row-6`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 6
- source_category: AGRICULTURE & NATURAL RESOURCES
- program_name_link: Apprentice Arborist Technician (https://sfdhr.org/apprenticeshipsf-programs)
- location: City & County of San Francisco

#### Record: Envrionmental Horticultural (https://www.ccsf.edu/degrees-certificates/environmental-horticulture)
- record_id: `career-pathways-row-7`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 7
- source_category: AGRICULTURE & NATURAL RESOURCES
- program_name_link: Envrionmental Horticultural (https://www.ccsf.edu/degrees-certificates/environmental-horticulture)
- location: City College of SF
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Horticulturalist (https://www.youtube.com/watch?v=22xj2StvhWU)

#### Record: Environmental Horticulture and Design (https://foothill.edu/hort/)
- record_id: `career-pathways-row-8`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 8
- source_category: AGRICULTURE & NATURAL RESOURCES
- program_name_link: Environmental Horticulture and Design (https://foothill.edu/hort/)
- location: Foothill College

#### Record: Floristry (https://www.ccsf.edu/degrees-certificates/floristry)
- record_id: `career-pathways-row-9`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 9
- source_category: AGRICULTURE & NATURAL RESOURCES
- program_name_link: Floristry (https://www.ccsf.edu/degrees-certificates/floristry)
- location: City College of SF
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day as a Studio Florist (https://floristsreview.com/the-day-in-the-life-of-a-studio-florist/)

#### Record: Gardening/Horticulture Apprenticeship
- record_id: `career-pathways-row-10`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 10
- source_category: AGRICULTURE & NATURAL RESOURCES
- program_name_link: Gardening/Horticulture Apprenticeship
- location: City College of SF

#### Record: Veterinary Technology (https://foothill.edu/vettech/)
- record_id: `career-pathways-row-11`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 11
- source_category: AGRICULTURE & NATURAL RESOURCES
- program_name_link: Veterinary Technology (https://foothill.edu/vettech/)
- location: Foothill College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Vet Tech (https://open.spotify.com/episode/5n3zzCh2Nty62tNBZeHwfi)

#### Category / Section: ARTS, MEDIA & ENTERTAINMENT

#### Record: AV Technologist (https://catalog.collegeofsanmateo.edu/current/programs/audio-video-technician-prep-cs.php)
- record_id: `career-pathways-row-13`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 13
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: AV Technologist (https://catalog.collegeofsanmateo.edu/current/programs/audio-video-technician-prep-cs.php)
- location: College of San Mateo

#### Record: Broadcast Digital Arts Media (https://owhstudios.tv/)
- record_id: `career-pathways-row-14`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 14
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Broadcast Digital Arts Media (https://owhstudios.tv/)
- location: Oakland
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TV Broadcast, Digital Arts Media, Training Program

#### Record: Broadcast Electronic Media Arts (https://www.ccsf.edu/academics/schools/school-fine-applied-communication-arts/bema)
- record_id: `career-pathways-row-15`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 15
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Broadcast Electronic Media Arts (https://www.ccsf.edu/academics/schools/school-fine-applied-communication-arts/bema)
- location: City College of SF

#### Record: Dance (http://catalog.skylinecollege.edu/current/programs/dance-aa.php)
- record_id: `career-pathways-row-16`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 16
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Dance (http://catalog.skylinecollege.edu/current/programs/dance-aa.php)
- location: Skyline College

#### Record: Digital Art & Animation (https://www.canadacollege.edu/digitalartanimation/index.php)
- record_id: `career-pathways-row-17`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 17
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Digital Art & Animation (https://www.canadacollege.edu/digitalartanimation/index.php)
- location: Canada College

#### Record: Digital Arts (https://skylinecollege.edu/digitalmedia/)
- record_id: `career-pathways-row-18`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 18
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Digital Arts (https://skylinecollege.edu/digitalmedia/)
- location: Skyline College

#### Record: Digital Media (https://collegeofsanmateo.edu/digitalmedia/)
- record_id: `career-pathways-row-19`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 19
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Digital Media (https://collegeofsanmateo.edu/digitalmedia/)
- location: College of San Mateo

#### Record: Drama
- record_id: `career-pathways-row-20`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 20
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Drama
- location: Skyline College

#### Record: Fashion Design & Merchandising (https://canadacollege.edu/fashion/)
- record_id: `career-pathways-row-21`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 21
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Fashion Design & Merchandising (https://canadacollege.edu/fashion/)
- location: Canada College

#### Record: Film and Television Production (https://www.deanza.edu/ftv/degrees-certificates.html)
- record_id: `career-pathways-row-22`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 22
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Film and Television Production (https://www.deanza.edu/ftv/degrees-certificates.html)
- location: DeAnza College

#### Record: Graphic and Ineractive Design (https://www.deanza.edu/career-training/graphic-design.html)
- record_id: `career-pathways-row-23`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 23
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Graphic and Ineractive Design (https://www.deanza.edu/career-training/graphic-design.html)
- location: DeAnza College

#### Record: Graphic and Interactive Design (https://foothill.edu/gid/)
- record_id: `career-pathways-row-24`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 24
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Graphic and Interactive Design (https://foothill.edu/gid/)
- location: Foothill College

#### Record: Graphic Arts (https://oldwp.laney.edu/graphic_arts/)
- record_id: `career-pathways-row-25`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 25
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Graphic Arts (https://oldwp.laney.edu/graphic_arts/)
- location: Laney College

#### Record: Interior Design (https://canadacollege.edu/interiordesign/)
- record_id: `career-pathways-row-26`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 26
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Interior Design (https://canadacollege.edu/interiordesign/)
- location: Canada College

#### Record: Journalism (http://skylinecollege.edu/journalism/)
- record_id: `career-pathways-row-27`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 27
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Journalism (http://skylinecollege.edu/journalism/)
- location: Skyline College

#### Record: Kinesiology (https://catalog.canadacollege.edu/current/programs/kinesiology-aa.php)
- record_id: `career-pathways-row-28`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 28
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Kinesiology (https://catalog.canadacollege.edu/current/programs/kinesiology-aa.php)
- location: Canada College

#### Record: Media (https://laney.edu/media/)
- record_id: `career-pathways-row-29`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 29
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Media (https://laney.edu/media/)
- location: Laney College

#### Record: Music (http://skylinecollege.edu/music/index.php)
- record_id: `career-pathways-row-30`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 30
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Music (http://skylinecollege.edu/music/index.php)
- location: Skyline College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day of a Full-time Musician (https://bandzoogle.com/blog/a-day-in-the-life-of-a-full-time-musician)

#### Record: Music (https://catalog.canadacollege.edu/current/programs/music-aa.php)
- record_id: `career-pathways-row-31`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 31
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Music (https://catalog.canadacollege.edu/current/programs/music-aa.php)
- location: Canada College

#### Record: Music (https://fhweb2.foothill.edu/music/index.html)
- record_id: `career-pathways-row-32`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 32
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Music (https://fhweb2.foothill.edu/music/index.html)
- location: Foothill College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Game & Audio, Pro Tools, Songwriting, Electronic Music, Business Music & Audio Post Production

#### Record: Music & Computer Technology (https://www.ccsf.edu/degrees-certificates/music)
- record_id: `career-pathways-row-33`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 33
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Music & Computer Technology (https://www.ccsf.edu/degrees-certificates/music)
- location: City College of SF

#### Record: Photography (https://laney.edu/photography/)
- record_id: `career-pathways-row-34`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 34
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Photography (https://laney.edu/photography/)
- location: Laney College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day as a Photographer (https://au.indeed.com/career-advice/finding-a-job/day-in-the-life-of-photographer)

#### Record: Photography - Film & Digital (https://www.deanza.edu/career-training/photography.html)
- record_id: `career-pathways-row-35`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 35
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Photography - Film & Digital (https://www.deanza.edu/career-training/photography.html)
- location: DeAnza College

#### Record: Photography Certificate (https://www.ccsf.edu/academics/schools/school-fine-applied-communication-arts/photography-department)
- record_id: `career-pathways-row-36`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 36
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Photography Certificate (https://www.ccsf.edu/academics/schools/school-fine-applied-communication-arts/photography-department)
- location: City College of SF

#### Record: Theatre Arts at Canada
- record_id: `career-pathways-row-37`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 37
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Theatre Arts at Canada
- location: Canada College

#### Record: Visual Media Design Program (https://www.ccsf.edu/academics/schools/school-fine-applied-communication-arts/visual-media-design-department)
- record_id: `career-pathways-row-38`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 38
- source_category: ARTS, MEDIA & ENTERTAINMENT
- program_name_link: Visual Media Design Program (https://www.ccsf.edu/academics/schools/school-fine-applied-communication-arts/visual-media-design-department)
- location: City College of SF

#### Category / Section: BUILDING & CONSTRUCTION TRADES

#### Record: Build Your Future Skilled Trades (https://byf.org/explore/construction-careers/)
- record_id: `career-pathways-row-40`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 40
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Build Your Future Skilled Trades (https://byf.org/explore/construction-careers/)
- location: Various
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Construction Trades Websites (https://byf.org/explore/construction-careers/)

#### Record: Air Conditioning and Refrigeration Technology (https://foothill.edu/apprenticeships/trades/ac-refrigeration.html)
- record_id: `career-pathways-row-41`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 41
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Air Conditioning and Refrigeration Technology (https://foothill.edu/apprenticeships/trades/ac-refrigeration.html)
- location: Foothill College

#### Record: San Francisco Building Trades (https://sfbuildingtrades.org/)
- record_id: `career-pathways-row-42`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 42
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: San Francisco Building Trades (https://sfbuildingtrades.org/)
- location: San Francisco

#### Record: Construction Technology (https://www.ccsf.edu/degrees-certificates/construction-technology)
- record_id: `career-pathways-row-43`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 43
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Construction Technology (https://www.ccsf.edu/degrees-certificates/construction-technology)
- location: City College of SF
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with an Elevator Constructor Apprentice (https://open.spotify.com/episode/7FnG4mA77t0aCgfvkkIIKE)

#### Record: Boilermaker (https://www.bnap.com/contact-us)
- record_id: `career-pathways-row-44`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 44
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Boilermaker (https://www.bnap.com/contact-us)
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Boilermaker (https://open.spotify.com/episode/0Er2MpL1vOAzEIxfcTS25x)

#### Record: Building Inspection Technology (https://collegeofsanmateo.edu/buildinginspection/)
- record_id: `career-pathways-row-45`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 45
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Building Inspection Technology (https://collegeofsanmateo.edu/buildinginspection/)
- location: College of San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Home Inspector (https://open.spotify.com/episode/6O9kVmbgbTJp2ff4tEQ3aZ)

#### Record: Carpentry (https://laney.edu/cte/carpentry)
- record_id: `career-pathways-row-46`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 46
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Carpentry (https://laney.edu/cte/carpentry)
- location: Laney College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Carpenter (https://www.youtube.com/watch?v=pJBk_33JvbM)

#### Record: Carpentry Pre-Appretinceship Training
- record_id: `career-pathways-row-47`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 47
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Carpentry Pre-Appretinceship Training
- location: JobTrain

#### Record: Apprentice Cement Mason (https://sfdhr.org/apprenticeshipsf-programs)
- record_id: `career-pathways-row-48`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 48
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Apprentice Cement Mason (https://sfdhr.org/apprenticeshipsf-programs)
- location: City & County of SF
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Stone Mason (https://open.spotify.com/episode/2S15OPZf1q72OIgEMbdpMd)

#### Record: CityBuild Academy
- record_id: `career-pathways-row-49`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 49
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: CityBuild Academy
- location: City College of SF

#### Record: Construction Management (https://laney.edu/construction_management/)
- record_id: `career-pathways-row-50`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 50
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Construction Management (https://laney.edu/construction_management/)
- location: Laney College

#### Record: https://www.petersoncat.com/about-us/thinkbig, https://www.deltacollege.edu/program/diesel-technology
- record_id: `career-pathways-row-51`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 51
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: https://www.petersoncat.com/about-us/thinkbig, https://www.deltacollege.edu/program/diesel-technology
- location: San Joaquin Delta College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: |
  ThinkBig is a co-op between Peterson Cat and
  San Joaquin Delta College

#### Record: https://careers.pge.com/content/TDOverview/?locale=en_US
- record_id: `career-pathways-row-52`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 52
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: https://careers.pge.com/content/TDOverview/?locale=en_US
- location: Various

#### Record: Electrical & Electronics Technology (https://laney.edu/cte/electrical-and-electronics-technology)
- record_id: `career-pathways-row-53`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 53
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Electrical & Electronics Technology (https://laney.edu/cte/electrical-and-electronics-technology)
- location: Laney College

#### Record: Electrical Apprenticeship - Iniside Wireman (https://catalog.collegeofsanmateo.edu/current/programs/apprenticeship-electrical-technology-inside-wireman-as.php)
- record_id: `career-pathways-row-54`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 54
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Electrical Apprenticeship - Iniside Wireman (https://catalog.collegeofsanmateo.edu/current/programs/apprenticeship-electrical-technology-inside-wireman-as.php)
- location: College of San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with an Electrician Apprentice (https://open.spotify.com/episode/5w1xfMKJ8E1nA2Vac4EFb7)

#### Record: Electrical Technology/Electrical Power Systems (https://catalog.collegeofsanmateo.edu/current/programs/electrical-technology-electrical-power-systems-and-instrumentation-ca.php)
- record_id: `career-pathways-row-55`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 55
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Electrical Technology/Electrical Power Systems (https://catalog.collegeofsanmateo.edu/current/programs/electrical-technology-electrical-power-systems-and-instrumentation-ca.php)
- location: College of San Mateo

#### Record: Apprentice Electrical Motor Worker (https://sfdhr.org/apprenticeshipsf-programs)
- record_id: `career-pathways-row-56`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 56
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Apprentice Electrical Motor Worker (https://sfdhr.org/apprenticeshipsf-programs)
- location: City & County of SF

#### Record: General Electrician (https://foothill.edu/workforce/gainful-employment/electrician.html)
- record_id: `career-pathways-row-57`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 57
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: General Electrician (https://foothill.edu/workforce/gainful-employment/electrician.html)
- location: Foothill College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Life of an Electician (https://www.youtube.com/watch?v=lifunadBZ3U)

#### Record: Electronics Technology (https://collegeofsanmateo.edu/articulation/outlines_elec.asp)
- record_id: `career-pathways-row-58`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 58
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Electronics Technology (https://collegeofsanmateo.edu/articulation/outlines_elec.asp)
- location: College of San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day in the Life of an Electronics Technician Supervisor (https://www.youtube.com/watch?v=bRaLFYCLmNM)

#### Record: Solar Energy Technology (https://catalog.skylinecollege.edu/1718/programs/solar-energy-technology-cs.php)
- record_id: `career-pathways-row-59`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 59
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Solar Energy Technology (https://catalog.skylinecollege.edu/1718/programs/solar-energy-technology-cs.php)
- location: Skyline College

#### Record: Facilities Management
- record_id: `career-pathways-row-60`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 60
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Facilities Management
- location: College of San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Life of a Facilities Manager (https://www.youtube.com/watch?v=EpBQnapmHLU)

#### Record: Foothill College Field Ironworkers (https://catalog.foothill.edu/courses-az/appr/)
- record_id: `career-pathways-row-61`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 61
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Foothill College Field Ironworkers (https://catalog.foothill.edu/courses-az/appr/)
- location: Foothill College

#### Record: Heating, Ventilation, Air-Conditioning, Refrigeration (HVAC) Certificate (https://www.ccsf.edu/degrees-certificates/met-hvac-plumbing)
- record_id: `career-pathways-row-62`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 62
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Heating, Ventilation, Air-Conditioning, Refrigeration (HVAC) Certificate (https://www.ccsf.edu/degrees-certificates/met-hvac-plumbing)
- location: City College of SF

#### Record: Industrial Maintenance (https://mapsforsuccess.laney.edu/academics/interest-clusters/dc0a1f47-0183-47c0-938c-9ddb1ef5d6ce/programs/2e90cb73-1d36-7f69-279b-75bc09e46d92)
- record_id: `career-pathways-row-63`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 63
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Industrial Maintenance (https://mapsforsuccess.laney.edu/academics/interest-clusters/dc0a1f47-0183-47c0-938c-9ddb1ef5d6ce/programs/2e90cb73-1d36-7f69-279b-75bc09e46d92)
- location: Laney College

#### Record: Machine Technology (https://laney.edu/machine_technology/)
- record_id: `career-pathways-row-64`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 64
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Machine Technology (https://laney.edu/machine_technology/)
- location: Laney College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Occupational Video - Vending Machine Technician (https://www.youtube.com/watch?v=GES7sififhc)

#### Record: Mission College (https://missioncollege.edu/)
- record_id: `career-pathways-row-65`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 65
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Mission College (https://missioncollege.edu/)
- location: Mission College

#### Record: Apprentice Pile Worker (https://sfdhr.org/apprenticeshipsf-programs)
- record_id: `career-pathways-row-66`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 66
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Apprentice Pile Worker (https://sfdhr.org/apprenticeshipsf-programs)
- location: City & County of SF

#### Record: Plastering Apprenticeship
- record_id: `career-pathways-row-67`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 67
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Plastering Apprenticeship
- location: City College of SF

#### Record: Plastering Apprenticeship (https://www.ncpjatc.org/)
- record_id: `career-pathways-row-68`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 68
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Plastering Apprenticeship (https://www.ncpjatc.org/)
- location: Northern California JATC

#### Record: Plumbing, Pipefitting Apprenticeship thru Local 467 (http://www.ualocal467.org/apprenticeship.aspx)
- record_id: `career-pathways-row-69`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 69
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Plumbing, Pipefitting Apprenticeship thru Local 467 (http://www.ualocal467.org/apprenticeship.aspx)
- location: 1519 Rollins Road, Burlingame, CA 94010
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Master Plumber (https://open.spotify.com/episode/5n3zzCh2Nty62tNBZeHwfi)

#### Record: Engineered Plumbing Systems Certificate (http://www.ccsf.edu/en/educational-programs/school-and-departments/school-of-science-and-mathematics/engineering-and-technology/met---hvac---eng-plumb.html)
- record_id: `career-pathways-row-70`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 70
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Engineered Plumbing Systems Certificate (http://www.ccsf.edu/en/educational-programs/school-and-departments/school-of-science-and-mathematics/engineering-and-technology/met---hvac---eng-plumb.html)
- location: City College of SF
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Journeyman Plumber (https://open.spotify.com/episode/67nlMXnrda12TIJoVcHeu3)

#### Record: Plumbing Apprenticeship (https://www.ccsf.edu/node/160236)
- record_id: `career-pathways-row-71`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 71
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Plumbing Apprenticeship (https://www.ccsf.edu/node/160236)
- location: City College of SF

#### Record: Plumbing Technology (https://foothill.edu/apprenticeships/trades/plumbing.html)
- record_id: `career-pathways-row-72`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 72
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Plumbing Technology (https://foothill.edu/apprenticeships/trades/plumbing.html)
- location: Foothill College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Talkshop with a Pipefitter (https://open.spotify.com/episode/26ZpyB5UK7GZsxiwEJFz8C?si=cB-QOFhmQx-VpZyb64WBOQ)

#### Record: Roofing Apprenticeship
- record_id: `career-pathways-row-73`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 73
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Roofing Apprenticeship
- location: City of College SF

#### Record: Sheet Metal (https://foothill.edu/apprenticeships/trades/sheet-metal.html)
- record_id: `career-pathways-row-74`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 74
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Sheet Metal (https://foothill.edu/apprenticeships/trades/sheet-metal.html)
- location: Foothill College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Sheet Metal Worker (https://open.spotify.com/episode/5sp5AFgy9X48GRyk9BCQvw)

#### Record: Sheet Metal Apprentice thru Local 104 (https://smw104training.org/program-information/)
- record_id: `career-pathways-row-75`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 75
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Sheet Metal Apprentice thru Local 104 (https://smw104training.org/program-information/)
- location: Sheet Metal Workers Local 104

#### Record: Sound and Communication (https://foothill.edu/programs/programs.html?title_id=Apprenticeship%20-%20Sound%20and%20Communication)
- record_id: `career-pathways-row-76`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 76
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Sound and Communication (https://foothill.edu/programs/programs.html?title_id=Apprenticeship%20-%20Sound%20and%20Communication)
- location: Foothill College

#### Record: Steamfitting and Pipefitting (https://foothill.edu/apprenticeships/trades/steam-pipe.html)
- record_id: `career-pathways-row-77`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 77
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Steamfitting and Pipefitting (https://foothill.edu/apprenticeships/trades/steam-pipe.html)
- location: Foothill College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Life in the Pipe Trades (https://www.youtube.com/watch?v=D6mUqcsmu_I)

#### Record: Welding Technology (https://laney.edu/welding/)
- record_id: `career-pathways-row-78`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 78
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Welding Technology (https://laney.edu/welding/)
- location: Laney College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: A Day in the Life of a Welder (https://www.youtube.com/watch?v=CuDwydMjgGg)

#### Record: Wood Technology (https://laney.edu/woodtechnology/)
- record_id: `career-pathways-row-79`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 79
- source_category: BUILDING & CONSTRUCTION TRADES
- program_name_link: Wood Technology (https://laney.edu/woodtechnology/)
- location: Laney College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Woodworking Technician Interview (https://www.youtube.com/watch?v=JrdTkpfA2UQ)

#### Category / Section: BUSINESS & FINANCE

#### Record: Accounting at Canada
- record_id: `career-pathways-row-81`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 81
- source_category: BUSINESS & FINANCE
- program_name_link: Accounting at Canada
- location: Canada College

#### Record: Accounting (https://collegeofsanmateo.edu/accounting/)
- record_id: `career-pathways-row-82`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 82
- source_category: BUSINESS & FINANCE
- program_name_link: Accounting (https://collegeofsanmateo.edu/accounting/)
- location: College of San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day as an Accountant (https://www.youtube.com/watch?v=Abi56urip1M)

#### Record: Accounting (https://foothill.edu/accounting/)
- record_id: `career-pathways-row-83`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 83
- source_category: BUSINESS & FINANCE
- program_name_link: Accounting (https://foothill.edu/accounting/)
- location: Foothill College

#### Record: Accounting
- record_id: `career-pathways-row-84`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 84
- source_category: BUSINESS & FINANCE
- program_name_link: Accounting
- location: Skyline College

#### Record: Business Administration/Management at Canada
- record_id: `career-pathways-row-85`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 85
- source_category: BUSINESS & FINANCE
- program_name_link: Business Administration/Management at Canada
- location: Canada College

#### Record: Business and Economics at Laney
- record_id: `career-pathways-row-86`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 86
- source_category: BUSINESS & FINANCE
- program_name_link: Business and Economics at Laney
- location: Laney College

#### Record: Business and Economics at Laney
- record_id: `career-pathways-row-87`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 87
- source_category: BUSINESS & FINANCE
- program_name_link: Business and Economics at Laney
- location: Laney College

#### Record: Business and Finance
- record_id: `career-pathways-row-88`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 88
- source_category: BUSINESS & FINANCE
- program_name_link: Business and Finance
- location: City College of SF

#### Record: Business Management (https://collegeofsanmateo.edu/sloac/slos_course/business-management/index.asp)
- record_id: `career-pathways-row-89`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 89
- source_category: BUSINESS & FINANCE
- program_name_link: Business Management (https://collegeofsanmateo.edu/sloac/slos_course/business-management/index.asp)
- location: College of San Mateo

#### Record: Computer Business Office Technology at Canada
- record_id: `career-pathways-row-90`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 90
- source_category: BUSINESS & FINANCE
- program_name_link: Computer Business Office Technology at Canada
- location: Canada College

#### Record: Communications Training Program (https://sanmateoadulted.org/programs/career-education/professional-communications/)
- record_id: `career-pathways-row-91`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 91
- source_category: BUSINESS & FINANCE
- program_name_link: Communications Training Program (https://sanmateoadulted.org/programs/career-education/professional-communications/)
- location: San Mateo Adult School

#### Record: Economics at Canada
- record_id: `career-pathways-row-92`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 92
- source_category: BUSINESS & FINANCE
- program_name_link: Economics at Canada
- location: Canada College

#### Record: Entrepreneurship (http://catalog.skylinecollege.edu/current/programs/entrepreneurship-and-small-business-management-ca.php)
- record_id: `career-pathways-row-93`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 93
- source_category: BUSINESS & FINANCE
- program_name_link: Entrepreneurship (http://catalog.skylinecollege.edu/current/programs/entrepreneurship-and-small-business-management-ca.php)
- location: Skyline College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with Two Entrepreneurs (https://open.spotify.com/episode/5VVsONFn9ppXSoUb026fzN)

#### Category / Section: EDUCATION, CHILD DEVELOPMENT & FAMILY SERVICES
- column_4: updated 9/11/2025

#### Record: Education & Human Development (https://www.canadacollege.edu/earlychildhoodeducation/)
- record_id: `career-pathways-row-95`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 95
- source_category: EDUCATION, CHILD DEVELOPMENT & FAMILY SERVICES
- program_name_link: Education & Human Development (https://www.canadacollege.edu/earlychildhoodeducation/)
- location: Canada College

#### Record: Child Development & Education (https://foothill.edu/childdevelopment/)
- record_id: `career-pathways-row-96`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 96
- source_category: EDUCATION, CHILD DEVELOPMENT & FAMILY SERVICES
- program_name_link: Child Development & Education (https://foothill.edu/childdevelopment/)
- location: Foothill College

#### Record: Education & Child Development (http://www.skylinecollege.edu/epicenter/index.php)
- record_id: `career-pathways-row-97`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 97
- source_category: EDUCATION, CHILD DEVELOPMENT & FAMILY SERVICES
- program_name_link: Education & Child Development (http://www.skylinecollege.edu/epicenter/index.php)
- location: Skyline College

#### Record: Education & Child Development (https://www.ccsf.edu/degrees-certificates/education-and-child-development)
- record_id: `career-pathways-row-98`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 98
- source_category: EDUCATION, CHILD DEVELOPMENT & FAMILY SERVICES
- program_name_link: Education & Child Development (https://www.ccsf.edu/degrees-certificates/education-and-child-development)
- location: City College of SF

#### Category / Section: ENERGY, ENVIRONMENT & UTILITIES

#### Record: Energy Systems Technology (https://catalog.skylinecollege.edu/current/courses/energy-systems-technology-management/)
- record_id: `career-pathways-row-100`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 100
- source_category: ENERGY, ENVIRONMENT & UTILITIES
- program_name_link: Energy Systems Technology (https://catalog.skylinecollege.edu/current/courses/energy-systems-technology-management/)
- location: Skyline College

#### Record: Environmental Control (https://laney.edu/ect/)
- record_id: `career-pathways-row-101`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 101
- source_category: ENERGY, ENVIRONMENT & UTILITIES
- program_name_link: Environmental Control (https://laney.edu/ect/)
- location: Laney College

#### Record: Environmental Science & Technology (https://catalog.canadacollege.edu/current/programs/environmental-science-as.php)
- record_id: `career-pathways-row-102`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 102
- source_category: ENERGY, ENVIRONMENT & UTILITIES
- program_name_link: Environmental Science & Technology (https://catalog.canadacollege.edu/current/programs/environmental-science-as.php)
- location: Canada College

#### Record: Hydroelectric - Apprenticeship (https://water.ca.gov/About/Careers/Apprentice-Program?fbclid=IwAR0kwFB27FsgpgrWUx2FlvICkiUVjcP3FMNtIcIE9Jhov5BZOj-Bxt86UcA)
- record_id: `career-pathways-row-103`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 103
- source_category: ENERGY, ENVIRONMENT & UTILITIES
- program_name_link: Hydroelectric - Apprenticeship (https://water.ca.gov/About/Careers/Apprentice-Program?fbclid=IwAR0kwFB27FsgpgrWUx2FlvICkiUVjcP3FMNtIcIE9Jhov5BZOj-Bxt86UcA)
- location: Dept of Water Resources-Sacramento

#### Record: Apprentice Power Line Worker (https://sfdhr.org/apprenticeshipsf-programs)
- record_id: `career-pathways-row-104`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 104
- source_category: ENERGY, ENVIRONMENT & UTILITIES
- program_name_link: Apprentice Power Line Worker (https://sfdhr.org/apprenticeshipsf-programs)
- location: City & County of SF

#### Record: PG&E Power Pathways (https://careers.pge.com/content/TDOverview/?locale=en_US)
- record_id: `career-pathways-row-105`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 105
- source_category: ENERGY, ENVIRONMENT & UTILITIES
- program_name_link: PG&E Power Pathways (https://careers.pge.com/content/TDOverview/?locale=en_US)
- location: PG&E Power Pathways

#### Category / Section: ENGINEERING & ARCHITECTURE

#### Record: Architecture (https://laney.edu/architecture/)
- record_id: `career-pathways-row-107`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 107
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: Architecture (https://laney.edu/architecture/)
- location: Laney College

#### Record: Architecture (https://collegeofsanmateo.edu/architecture/)
- record_id: `career-pathways-row-108`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 108
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: Architecture (https://collegeofsanmateo.edu/architecture/)
- location: College of San Mateo

#### Record: CAD and Drafting Program (https://www.ccsf.edu/degrees-certificates/computer-aided-design)
- record_id: `career-pathways-row-109`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 109
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: CAD and Drafting Program (https://www.ccsf.edu/degrees-certificates/computer-aided-design)
- location: City College of SF

#### Record: Drafting Technology (http://collegeofsanmateo.edu/drafting/)
- record_id: `career-pathways-row-110`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 110
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: Drafting Technology (http://collegeofsanmateo.edu/drafting/)
- location: College of San Mateo

#### Record: Engineering (https://canadacollege.edu/engineering/index.php)
- record_id: `career-pathways-row-111`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 111
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: Engineering (https://canadacollege.edu/engineering/index.php)
- location: Canada College

#### Record: Engineering (http://collegeofsanmateo.edu/engineering/)
- record_id: `career-pathways-row-112`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 112
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: Engineering (http://collegeofsanmateo.edu/engineering/)
- location: College of San Mateo

#### Record: Engineering (https://laney.edu/engineering/)
- record_id: `career-pathways-row-113`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 113
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: Engineering (https://laney.edu/engineering/)
- location: Laney College

#### Record: Environmental Science (https://catalog.canadacollege.edu/current/programs/environmental-science-as.php)
- record_id: `career-pathways-row-114`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 114
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: Environmental Science (https://catalog.canadacollege.edu/current/programs/environmental-science-as.php)
- location: Canada College

#### Record: Apprentice Stationary Engineer General (https://sfdhr.org/apprenticeshipsf-programs)
- record_id: `career-pathways-row-115`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 115
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: Apprentice Stationary Engineer General (https://sfdhr.org/apprenticeshipsf-programs)
- location: City & County of SF

#### Record: Apprentice Stationary Engineer, Sewer Plant (https://sfdhr.org/apprenticeshipsf-programs)
- record_id: `career-pathways-row-116`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 116
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: Apprentice Stationary Engineer, Sewer Plant (https://sfdhr.org/apprenticeshipsf-programs)
- location: City & County of SF

#### Record: Apprentice Stationary Engineer, Water Treatment Plant (https://sfdhr.org/apprenticeshipsf-programs)
- record_id: `career-pathways-row-117`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 117
- source_category: ENGINEERING & ARCHITECTURE
- program_name_link: Apprentice Stationary Engineer, Water Treatment Plant (https://sfdhr.org/apprenticeshipsf-programs)
- location: City & County of SF

#### Category / Section: FASHION & INTERIOR DESIGN

#### Record: Assistant Interior Designer Program (https://www.ccsf.edu/degrees-certificates/interior-design)
- record_id: `career-pathways-row-119`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 119
- source_category: FASHION & INTERIOR DESIGN
- program_name_link: Assistant Interior Designer Program (https://www.ccsf.edu/degrees-certificates/interior-design)
- location: City College of SF

#### Record: Cosmetology (https://laney.edu/cosmetology/)
- record_id: `career-pathways-row-120`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 120
- source_category: FASHION & INTERIOR DESIGN
- program_name_link: Cosmetology (https://laney.edu/cosmetology/)
- location: Laney College

#### Record: Cosmetology (http://www.skylinecollege.edu/cosmetology/index.php)
- record_id: `career-pathways-row-121`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 121
- source_category: FASHION & INTERIOR DESIGN
- program_name_link: Cosmetology (http://www.skylinecollege.edu/cosmetology/index.php)
- location: Skyline College

#### Record: Cosmetology (http://collegeofsanmateo.edu/cosmetology/)
- record_id: `career-pathways-row-122`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 122
- source_category: FASHION & INTERIOR DESIGN
- program_name_link: Cosmetology (http://collegeofsanmateo.edu/cosmetology/)
- location: College of San Mateo

#### Record: Fashion Design & Merchandising (https://www.ccsf.edu/academics/schools/business-fashion-hospitality/fashion-department)
- record_id: `career-pathways-row-123`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 123
- source_category: FASHION & INTERIOR DESIGN
- program_name_link: Fashion Design & Merchandising (https://www.ccsf.edu/academics/schools/business-fashion-hospitality/fashion-department)
- location: City College of SF

#### Record: Fashion Design & Merchandising (https://canadacollege.edu/fashion/courses.php)
- record_id: `career-pathways-row-124`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 124
- source_category: FASHION & INTERIOR DESIGN
- program_name_link: Fashion Design & Merchandising (https://canadacollege.edu/fashion/courses.php)
- location: Canada College

#### Record: Interior Design (https://canadacollege.edu/interiordesign/)
- record_id: `career-pathways-row-125`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 125
- source_category: FASHION & INTERIOR DESIGN
- program_name_link: Interior Design (https://canadacollege.edu/interiordesign/)
- location: Canada College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day as an Interior Designer (https://youtu.be/IMaaYcvGpCo?feature=shared)

#### Category / Section: HEALTH SCIENCE & MEDICAL TECHNOLOGY

#### Record: Addiction and Recovery Counseling Program (https://www.ccsf.edu/degrees-certificates/addiction-recovery-counseling)
- record_id: `career-pathways-row-127`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 127
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Addiction and Recovery Counseling Program (https://www.ccsf.edu/degrees-certificates/addiction-recovery-counseling)
- location: City College of SF

#### Record: Addiction Studies (https://catalog.collegeofsanmateo.edu/current/programs/addiction-studies-aa.php)
- record_id: `career-pathways-row-128`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 128
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Addiction Studies (https://catalog.collegeofsanmateo.edu/current/programs/addiction-studies-aa.php)
- location: College of San Mateo

#### Record: Allied Health Science (http://skylinecollege.edu/alliedhealth/)
- record_id: `career-pathways-row-129`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 129
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Allied Health Science (http://skylinecollege.edu/alliedhealth/)
- location: Skyline College

#### Record: Biology and Health Sciences (https://collegeofsanmateo.edu/biology/)
- record_id: `career-pathways-row-130`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 130
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Biology and Health Sciences (https://collegeofsanmateo.edu/biology/)
- location: College of San Mateo

#### Record: Biotechnology (https://skylinecollege.edu/biotechnology/)
- record_id: `career-pathways-row-131`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 131
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Biotechnology (https://skylinecollege.edu/biotechnology/)
- location: Skyline College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Biotech Manufacturing Associate (https://open.spotify.com/episode/53dw2InVZAhZv3Rd5c3Wbk)

#### Record: Biotechnology (https://catalog.collegeofsanmateo.edu/current/programs/biotechnology-cs.php)
- record_id: `career-pathways-row-132`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 132
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Biotechnology (https://catalog.collegeofsanmateo.edu/current/programs/biotechnology-cs.php)
- location: College of San Mateo

#### Record: Biotechnology Certificate
- record_id: `career-pathways-row-133`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 133
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Biotechnology Certificate
- location: City College of SF

#### Record: Biotechnology Lab Assistant Certificate
- record_id: `career-pathways-row-134`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 134
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Biotechnology Lab Assistant Certificate
- location: City College of SF

#### Record: Cardiovascular (CVT) / ECHO Technician Program (https://www.ccsf.edu/taxonomy/term/51781)
- record_id: `career-pathways-row-135`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 135
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Cardiovascular (CVT) / ECHO Technician Program (https://www.ccsf.edu/taxonomy/term/51781)
- location: City College of SF

#### Record: Certified Nurse Assistant & Home Health Aid Training Program (https://www.jobtrainworks.org/cna/)
- record_id: `career-pathways-row-136`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 136
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Certified Nurse Assistant & Home Health Aid Training Program (https://www.jobtrainworks.org/cna/)
- location: Job Train

#### Record: College of San Mateo Kinesiology (https://catalog.collegeofsanmateo.edu/current/courses/kinesiology/)
- record_id: `career-pathways-row-137`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 137
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: College of San Mateo Kinesiology (https://catalog.collegeofsanmateo.edu/current/courses/kinesiology/)
- location: College of San Mateo

#### Record: Community Health Worker Program (https://www.ccsf.edu/degrees-certificates/community-health-worker)
- record_id: `career-pathways-row-138`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 138
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Community Health Worker Program (https://www.ccsf.edu/degrees-certificates/community-health-worker)
- location: City College of SF

#### Record: Community Mental Health Worker Certificate Program (https://www.ccsf.edu/degrees-certificates/community-mental-health-worker)
- record_id: `career-pathways-row-139`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 139
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Community Mental Health Worker Certificate Program (https://www.ccsf.edu/degrees-certificates/community-mental-health-worker)
- location: City College of SF

#### Record: Dental Assistant Certificate
- record_id: `career-pathways-row-140`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 140
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Dental Assistant Certificate
- location: Jewish Vocational Services

#### Record: Dental Assisting
- record_id: `career-pathways-row-141`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 141
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Dental Assisting
- location: College of San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day of a Dental Assistant (https://www.youtube.com/watch?v=Kd0vC3beboo)

#### Record: Dental Assisting (https://foothill.edu/dentalasst/)
- record_id: `career-pathways-row-142`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 142
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Dental Assisting (https://foothill.edu/dentalasst/)
- location: Foothill College

#### Record: Dental Assisting Program
- record_id: `career-pathways-row-143`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 143
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Dental Assisting Program
- location: City College of SF

#### Record: Dental Hygiene (https://foothill.edu/dentalhygiene/)
- record_id: `career-pathways-row-144`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 144
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Dental Hygiene (https://foothill.edu/dentalhygiene/)
- location: Foothill College

#### Record: Electrocardiography Technician Program (https://www.ccsf.edu/degrees-certificates/ecg-technician)
- record_id: `career-pathways-row-145`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 145
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Electrocardiography Technician Program (https://www.ccsf.edu/degrees-certificates/ecg-technician)
- location: City College of SF

#### Record: Emergency Medical Technician (EMT) Program (https://www.ccsf.edu/degrees-certificates/emergency-medical-technician-emt)
- record_id: `career-pathways-row-146`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 146
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Emergency Medical Technician (EMT) Program (https://www.ccsf.edu/degrees-certificates/emergency-medical-technician-emt)
- location: City College of SF

#### Record: Emergency Medical Technician (EMT) Program (https://skylinecollege.edu/emt/)
- record_id: `career-pathways-row-147`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 147
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Emergency Medical Technician (EMT) Program (https://skylinecollege.edu/emt/)
- location: Skyline College

#### Record: Emergency Medical Technology (https://www.foothill.edu/ems/)
- record_id: `career-pathways-row-148`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 148
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Emergency Medical Technology (https://www.foothill.edu/ems/)
- location: Foothill College

#### Record: EMS Corp (https://ems.acgov.org/CommtyResources/EMScorps.page)
- record_id: `career-pathways-row-149`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 149
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: EMS Corp (https://ems.acgov.org/CommtyResources/EMScorps.page)
- location: Alameda, CA

#### Record: Foothill Diagnostic Medial Sonography Program (https://foothill.edu/dms/)
- record_id: `career-pathways-row-150`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 150
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Foothill Diagnostic Medial Sonography Program (https://foothill.edu/dms/)
- location: Foothill College

#### Record: Health Information Technology Program (https://www.ccsf.edu/degrees-certificates/health-information-technology)
- record_id: `career-pathways-row-151`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 151
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Health Information Technology Program (https://www.ccsf.edu/degrees-certificates/health-information-technology)
- location: City College of SF

#### Record: Healthcare Interpreter Certificate Program (https://www.ccsf.edu/degrees-certificates/healthcare-interpreter)
- record_id: `career-pathways-row-152`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 152
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Healthcare Interpreter Certificate Program (https://www.ccsf.edu/degrees-certificates/healthcare-interpreter)
- location: City College of SF

#### Record: Human Services
- record_id: `career-pathways-row-153`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 153
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Human Services
- location: Canada College

#### Record: Kinesiology, Athletics, & Dance at Canada
- record_id: `career-pathways-row-154`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 154
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Kinesiology, Athletics, & Dance at Canada
- location: Canada College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day of a Kinesiologist (https://www.youtube.com/watch?v=HP7bfHNdYqg)

#### Record: Licensed Vocational Nurse & Home Health Program
- record_id: `career-pathways-row-155`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 155
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Licensed Vocational Nurse & Home Health Program
- location: City College of SF

#### Record: Medical Administrative Assistant
- record_id: `career-pathways-row-156`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 156
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Medical Administrative Assistant
- location: Jewish Vocational Services

#### Record: Medical Assistant Training Program (https://sanmateoadulted.org/programs/career-education/clinical-medical-assistant/)
- record_id: `career-pathways-row-157`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 157
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Medical Assistant Training Program (https://sanmateoadulted.org/programs/career-education/clinical-medical-assistant/)
- location: San Mateo Adult School

#### Record: Medical Assistant Training Program
- record_id: `career-pathways-row-158`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 158
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Medical Assistant Training Program
- location: Job Train

#### Record: Medical Assisting (https://canadacollege.edu/medicalassisting/)
- record_id: `career-pathways-row-159`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 159
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Medical Assisting (https://canadacollege.edu/medicalassisting/)
- location: Canada College

#### Record: Medical Assisting Program (https://www.ccsf.edu/degrees-certificates/medical-assisting)
- record_id: `career-pathways-row-160`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 160
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Medical Assisting Program (https://www.ccsf.edu/degrees-certificates/medical-assisting)
- location: City College of San Francisco

#### Record: Mills-Peninsula Medical Center, School of Diagnostic Imaging
- record_id: `career-pathways-row-161`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 161
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Mills-Peninsula Medical Center, School of Diagnostic Imaging
- location: Mills-Peninsula Medical Center

#### Record: Nursing (https://missioncollege.edu/depts/health-occupations-nursing/)
- record_id: `career-pathways-row-162`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 162
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Nursing (https://missioncollege.edu/depts/health-occupations-nursing/)
- location: Mission College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day as a Nurse (https://www.youtube.com/watch?v=VnNvQvect-U)

#### Record: Nursing @ CSM
- record_id: `career-pathways-row-163`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 163
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Nursing @ CSM
- location: College of San Mateo

#### Record: Nutrition Assistant Certificate Program (https://www.ccsf.edu/degrees-certificates/nutrition)
- record_id: `career-pathways-row-164`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 164
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Nutrition Assistant Certificate Program (https://www.ccsf.edu/degrees-certificates/nutrition)
- location: City College of SF

#### Record: Paramedic (https://www.foothill.edu/ems/paramedic/)
- record_id: `career-pathways-row-165`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 165
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Paramedic (https://www.foothill.edu/ems/paramedic/)
- location: Foothill College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day as a Paramedic & EMT (https://www.youtube.com/watch?v=k0k6tWrISBM)

#### Record: Paramedic Program
- record_id: `career-pathways-row-166`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 166
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Paramedic Program
- location: City College of SF

#### Record: Pharmacy Technician (https://sanmateoadulted.org/programs/career-education/pharmacy-technician-training-program/)
- record_id: `career-pathways-row-167`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 167
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Pharmacy Technician (https://sanmateoadulted.org/programs/career-education/pharmacy-technician-training-program/)
- location: San Mateo Adult School

#### Record: Pharmacy Technician (https://foothill.edu/pharmtech/)
- record_id: `career-pathways-row-168`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 168
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Pharmacy Technician (https://foothill.edu/pharmtech/)
- location: Foothill College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day as a Pharmacy Technician (https://youtu.be/J3rEqwZjZIw?feature=shared)

#### Record: Pharmacy Technician Program (https://www.ccsf.edu/degrees-certificates/pharmacy-technician)
- record_id: `career-pathways-row-169`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 169
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Pharmacy Technician Program (https://www.ccsf.edu/degrees-certificates/pharmacy-technician)
- location: City College of SF
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with Pharmacy Technicians (https://open.spotify.com/episode/5R8lwJoiTVQ0DGoyr09KUa)

#### Record: Phlebotomy Technician Certification (https://www.ccsf.edu/degrees-certificates/phlebotomy-technician)
- record_id: `career-pathways-row-170`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 170
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Phlebotomy Technician Certification (https://www.ccsf.edu/degrees-certificates/phlebotomy-technician)
- location: City College of SF

#### Record: Public Health Science (https://foothill.edu/health/)
- record_id: `career-pathways-row-171`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 171
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Public Health Science (https://foothill.edu/health/)
- location: Foothill College

#### Record: Radiologic Sciences (https://w2.csun.edu/academics/majors-and-programs/radiologic-sciences-major)
- record_id: `career-pathways-row-172`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 172
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Radiologic Sciences (https://w2.csun.edu/academics/majors-and-programs/radiologic-sciences-major)
- location: California Northridge State University

#### Record: Radiologic Sciences
- record_id: `career-pathways-row-173`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 173
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Radiologic Sciences
- location: City College of SF

#### Record: Radiologic Technology (https://foothill.edu/radtech/)
- record_id: `career-pathways-row-174`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 174
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Radiologic Technology (https://foothill.edu/radtech/)
- location: Foothill College

#### Record: Radiologic Technology (https://canadacollege.edu/radtech/)
- record_id: `career-pathways-row-175`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 175
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Radiologic Technology (https://canadacollege.edu/radtech/)
- location: Canada College

#### Record: Respiratory Care Associate (https://skylinecollege.edu/respiratorycare/)
- record_id: `career-pathways-row-176`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 176
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Respiratory Care Associate (https://skylinecollege.edu/respiratorycare/)
- location: Skyline College

#### Record: Respiratory Therapy (https://foothill.edu/resptherapy/)
- record_id: `career-pathways-row-177`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 177
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Respiratory Therapy (https://foothill.edu/resptherapy/)
- location: Foothill College

#### Record: Skyline College Kinesiology
- record_id: `career-pathways-row-178`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 178
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Skyline College Kinesiology
- location: Skyline College

#### Record: Skyline College Respiratory Care Program
- record_id: `career-pathways-row-179`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 179
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Skyline College Respiratory Care Program
- location: Skyline College

#### Record: Sports Medicine (https://foothill.edu/sportsmed/)
- record_id: `career-pathways-row-180`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 180
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Sports Medicine (https://foothill.edu/sportsmed/)
- location: Foothill College

#### Record: Stem Cell Technology Certificate
- record_id: `career-pathways-row-181`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 181
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Stem Cell Technology Certificate
- location: City College of SF

#### Record: Sterile Processing Technology (https://skylinecollege.edu/sterileprocessing/)
- record_id: `career-pathways-row-182`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 182
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Sterile Processing Technology (https://skylinecollege.edu/sterileprocessing/)
- location: Skyline College

#### Record: Surgical Technology (https://skylinecollege.edu/surgicaltechnology/)
- record_id: `career-pathways-row-183`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 183
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Surgical Technology (https://skylinecollege.edu/surgicaltechnology/)
- location: Skyline College

#### Record: Unit Coordinator Program (https://www.ccsf.edu/degrees-certificates/unit-coordinator)
- record_id: `career-pathways-row-184`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 184
- source_category: HEALTH SCIENCE & MEDICAL TECHNOLOGY
- program_name_link: Unit Coordinator Program (https://www.ccsf.edu/degrees-certificates/unit-coordinator)
- location: City College of SF

#### Category / Section: HOSPITALITY, TOURISM & RECREATION
- column_4: updated 9/11/2025

#### Record: Culinary Arts and Hospitality Studies
- record_id: `career-pathways-row-186`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 186
- source_category: HOSPITALITY, TOURISM & RECREATION
- program_name_link: Culinary Arts and Hospitality Studies
- location: City College of SF

#### Record: Culinary Arts at Laney
- record_id: `career-pathways-row-187`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 187
- source_category: HOSPITALITY, TOURISM & RECREATION
- program_name_link: Culinary Arts at Laney
- location: Laney College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Chef (https://www.youtube.com/watch?v=7HrMcd-ODj0)

#### Record: Culinary Arts Training Program
- record_id: `career-pathways-row-188`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 188
- source_category: HOSPITALITY, TOURISM & RECREATION
- program_name_link: Culinary Arts Training Program
- location: JobTrain
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Sous and Pastry Chef (https://www.youtube.com/watch?v=DDFEfS4Ajt0)

#### Record: Hospitality Management (http://missioncollege.edu/depts/hospitality-management/)
- record_id: `career-pathways-row-189`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 189
- source_category: HOSPITALITY, TOURISM & RECREATION
- program_name_link: Hospitality Management (http://missioncollege.edu/depts/hospitality-management/)
- location: Mission College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Careers in Hospitality Management (https://www.youtube.com/watch?v=P-KIO4z_m0E)

#### Record: Hospitality & Tourism Management (http://skylinecollege.edu/hospitality/)
- record_id: `career-pathways-row-190`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 190
- source_category: HOSPITALITY, TOURISM & RECREATION
- program_name_link: Hospitality & Tourism Management (http://skylinecollege.edu/hospitality/)
- location: Skyline College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Travel & Tourism in 2022 (https://www.youtube.com/watch?v=c1eCPy5riko)

#### Category / Section: INFORMATION & COMMUNICATION TECHNOLOGIES

#### Record: Business, Computer Systems and Management
- record_id: `career-pathways-row-192`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 192
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: Business, Computer Systems and Management
- location: Skyline College

#### Record: Computer Information Systems (https://laney.edu/cis/)
- record_id: `career-pathways-row-193`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 193
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: Computer Information Systems (https://laney.edu/cis/)
- location: Laney College

#### Record: Computer Networking & Information Technology (https://www.ccsf.edu/degrees-certificates/computer-networking-and-information-technology)
- record_id: `career-pathways-row-194`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 194
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: Computer Networking & Information Technology (https://www.ccsf.edu/degrees-certificates/computer-networking-and-information-technology)
- location: City College of SF

#### Record: Computer Science (https://www.ccsf.edu/academics/ccsf-catalog/courses-by-department/computer-science)
- record_id: `career-pathways-row-195`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 195
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: Computer Science (https://www.ccsf.edu/academics/ccsf-catalog/courses-by-department/computer-science)
- location: City College of SF

#### Record: Computer Science (https://catalog.canadacollege.edu/current/programs/computer-science-as-t.php)
- record_id: `career-pathways-row-196`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 196
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: Computer Science (https://catalog.canadacollege.edu/current/programs/computer-science-as-t.php)
- location: Canada College

#### Record: Computer/Information Science (https://collegeofsanmateo.edu/cis/)
- record_id: `career-pathways-row-197`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 197
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: Computer/Information Science (https://collegeofsanmateo.edu/cis/)
- location: College of San Mateo

#### Record: Cybersecurity (https://catalog.collegeofsanmateo.edu/current/programs/enterprise-cybersecurity-cs.php)
- record_id: `career-pathways-row-198`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 198
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: Cybersecurity (https://catalog.collegeofsanmateo.edu/current/programs/enterprise-cybersecurity-cs.php)
- location: College of San Mateo

#### Record: IT Service and Support Training Program
- record_id: `career-pathways-row-199`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 199
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: IT Service and Support Training Program
- location: JobTrain

#### Record: Library Information Technology Certificate (https://www.ccsf.edu/degrees-certificates/library-information-technology)
- record_id: `career-pathways-row-200`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 200
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: Library Information Technology Certificate (https://www.ccsf.edu/degrees-certificates/library-information-technology)
- location: City College of SF

#### Record: Npower (https://www.npower.org/)
- record_id: `career-pathways-row-201`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 201
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: Npower (https://www.npower.org/)
- location: Online/In Person-San Jose/San Francisco
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Tech Fund./Cybersecurity/Cloud Computing/IT Support

#### Record: LinkedIn's REACH Program (https://careers.linkedin.com/reach)
- record_id: `career-pathways-row-202`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 202
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: LinkedIn's REACH Program (https://careers.linkedin.com/reach)
- location: LinkedIn

#### Record: Technology (https://www.npower.org/)
- record_id: `career-pathways-row-203`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 203
- source_category: INFORMATION & COMMUNICATION TECHNOLOGIES
- program_name_link: Technology (https://www.npower.org/)
- location: San Jose

#### Category / Section: MANUFACTURING & PRODUCT DESIGN
- column_4: updated 9/11/2025

#### Record: Biomanufacturing Program (https://mapsforsuccess.laney.edu/academics/interest-clusters/dc0a1f47-0183-47c0-938c-9ddb1ef5d6ce/programs/a9be20ec-8d33-9572-b815-4e26cb5ddb10)
- record_id: `career-pathways-row-205`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 205
- source_category: MANUFACTURING & PRODUCT DESIGN
- program_name_link: Biomanufacturing Program (https://mapsforsuccess.laney.edu/academics/interest-clusters/dc0a1f47-0183-47c0-938c-9ddb1ef5d6ce/programs/a9be20ec-8d33-9572-b815-4e26cb5ddb10)
- location: Laney College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Biotech Manufacturing Associate (https://open.spotify.com/episode/53dw2InVZAhZv3Rd5c3Wbk)

#### Record: Apprentice Maintenance Machinist (https://sfdhr.org/apprenticeshipsf-programs)
- record_id: `career-pathways-row-206`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 206
- source_category: MANUFACTURING & PRODUCT DESIGN
- program_name_link: Apprentice Maintenance Machinist (https://sfdhr.org/apprenticeshipsf-programs)
- location: City & County of San Francisco
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Maintenance Technician (Mechanical) (https://www.youtube.com/watch?v=FB2bEd9ueU0)

#### Record: Humanmade - Manufacturing (https://www.humanmade.org/)
- record_id: `career-pathways-row-207`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 207
- source_category: MANUFACTURING & PRODUCT DESIGN
- program_name_link: Humanmade - Manufacturing (https://www.humanmade.org/)
- location: San Francisco
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: https://www.humanmade.org/

#### Record: Manufacturing, Fabrication, Machining Technology, Welding Technology Program (https://www.ccsf.edu/degrees-certificates/manufacturing)
- record_id: `career-pathways-row-208`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 208
- source_category: MANUFACTURING & PRODUCT DESIGN
- program_name_link: Manufacturing, Fabrication, Machining Technology, Welding Technology Program (https://www.ccsf.edu/degrees-certificates/manufacturing)
- location: City College of SF
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Tool & Die Maker Apprentice (https://www.youtube.com/watch?v=Dod9igHR2rM)

#### Category / Section: MARKETING, SALES & SERVICE
- column_4: updated 9/11/2025

#### Record: Entrepreneurship (http://catalog.skylinecollege.edu/current/programs/entrepreneurship-and-small-business-management-ca.php)
- record_id: `career-pathways-row-210`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 210
- source_category: MARKETING, SALES & SERVICE
- program_name_link: Entrepreneurship (http://catalog.skylinecollege.edu/current/programs/entrepreneurship-and-small-business-management-ca.php)
- location: Skyline College

#### Record: Marketing Management
- record_id: `career-pathways-row-211`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 211
- source_category: MARKETING, SALES & SERVICE
- program_name_link: Marketing Management
- location: College of San Mateo

#### Record: College of San Mateo Real Estate (https://collegeofsanmateo.edu/realestate/)
- record_id: `career-pathways-row-212`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 212
- source_category: MARKETING, SALES & SERVICE
- program_name_link: College of San Mateo Real Estate (https://collegeofsanmateo.edu/realestate/)
- location: College of San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Real Estate Professional (https://open.spotify.com/episode/2uYylhr7DTMtYMKFaEiekI)

#### Record: Skyline College Real Estate
- record_id: `career-pathways-row-213`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 213
- source_category: MARKETING, SALES & SERVICE
- program_name_link: Skyline College Real Estate
- location: Skyline College

#### Category / Section: PUBLIC SERVICES

#### Record: Administration of Justice (https://collegeofsanmateo.edu/aj/)
- record_id: `career-pathways-row-215`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 215
- source_category: PUBLIC SERVICES
- program_name_link: Administration of Justice (https://collegeofsanmateo.edu/aj/)
- location: College of San Mateo

#### Record: Administration of Justice
- record_id: `career-pathways-row-216`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 216
- source_category: PUBLIC SERVICES
- program_name_link: Administration of Justice
- location: Skyline College

#### Record: California Highway Patrol Explorer Training (https://www.chp.ca.gov/chp-careers/explorer/explorer-training)
- record_id: `career-pathways-row-217`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 217
- source_category: PUBLIC SERVICES
- program_name_link: California Highway Patrol Explorer Training (https://www.chp.ca.gov/chp-careers/explorer/explorer-training)

#### Record: Court Reporting
- record_id: `career-pathways-row-218`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 218
- source_category: PUBLIC SERVICES
- program_name_link: Court Reporting
- location: West Valley College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Court Reporter (https://open.spotify.com/episode/5aPMoJDEqg5mAv314QmWSb?si=2Jm2VCX7RBmmyuZex_IxEw)

#### Record: Fire Technology Program (https://collegeofsanmateo.edu/fire/fireacademy.asp)
- record_id: `career-pathways-row-219`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 219
- source_category: PUBLIC SERVICES
- program_name_link: Fire Technology Program (https://collegeofsanmateo.edu/fire/fireacademy.asp)
- location: College of San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Firefighter (https://open.spotify.com/episode/07MDaui25IGTCP1588bb3e)

#### Record: Firefighter Explorer Program (https://www.cfsfire.org/community-outreach/fire-explorer-post/)
- record_id: `career-pathways-row-220`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 220
- source_category: PUBLIC SERVICES
- program_name_link: Firefighter Explorer Program (https://www.cfsfire.org/community-outreach/fire-explorer-post/)
- location: San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day of a Firefighter (https://www.youtube.com/watch?v=HEQPEjzi56c)

#### Record: Paralegal Studies (https://www.deanza.edu/paralegal/)
- record_id: `career-pathways-row-221`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 221
- source_category: PUBLIC SERVICES
- program_name_link: Paralegal Studies (https://www.deanza.edu/paralegal/)
- location: DeAnza College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day as a Paralegal (https://www.youtube.com/watch?v=0mcTtVmU__E)

#### Record: Paralegal Studies (https://canadacollege.edu/paralegal/)
- record_id: `career-pathways-row-222`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 222
- source_category: PUBLIC SERVICES
- program_name_link: Paralegal Studies (https://canadacollege.edu/paralegal/)
- location: Canada College

#### Record: Police Explorer Program (https://www.cityofsanmateo.org/2813/Cadet-Program)
- record_id: `career-pathways-row-223`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 223
- source_category: PUBLIC SERVICES
- program_name_link: Police Explorer Program (https://www.cityofsanmateo.org/2813/Cadet-Program)
- location: San Mateo Police Department
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day as a Police Officer (https://www.youtube.com/watch?v=eoBnWBIQgtU)

#### Record: Police Officer (https://www.cityofsanmateo.org/273/Police)
- record_id: `career-pathways-row-224`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 224
- source_category: PUBLIC SERVICES
- program_name_link: Police Officer (https://www.cityofsanmateo.org/273/Police)
- location: San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: https://youtu.be/0s7aNW60kmU

#### Record: Sheriff (https://www.smcsheriff.com/join-our-team)
- record_id: `career-pathways-row-225`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 225
- source_category: PUBLIC SERVICES
- program_name_link: Sheriff (https://www.smcsheriff.com/join-our-team)
- location: San Mateo
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day as a Sheriff (https://www.youtube.com/watch?v=NraKEGduHJ4)

#### Record: Skyline College Paralegal
- record_id: `career-pathways-row-226`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 226
- source_category: PUBLIC SERVICES
- program_name_link: Skyline College Paralegal
- location: Skyline College

#### Record: Skyline Emergency Medical Technology
- record_id: `career-pathways-row-227`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 227
- source_category: PUBLIC SERVICES
- program_name_link: Skyline Emergency Medical Technology
- location: Skyline College

#### Category / Section: TRANSPORTATION
- column_4: updated 9/9/2025

#### Record: Aircraft Maintenance Technology Program
- record_id: `career-pathways-row-229`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 229
- source_category: TRANSPORTATION
- program_name_link: Aircraft Maintenance Technology Program
- location: City College of SF
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with an Aircraft Maintenance Technician (https://open.spotify.com/episode/0vHzJv2uQZQbIdISRyjMzE)

#### Record: Coach Operator - Apprenticeship (https://mission.elumenapp.com/catalog/24-25/program/public-transit-coach-operator-ca-2023fa)
- record_id: `career-pathways-row-230`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 230
- source_category: TRANSPORTATION
- program_name_link: Coach Operator - Apprenticeship (https://mission.elumenapp.com/catalog/24-25/program/public-transit-coach-operator-ca-2023fa)
- location: Mission College

#### Record: Public Transit Leader - Apprenticeship (https://mission.elumenapp.com/catalog/24-25/program/public-transit-leadership-ca-2023fa)
- record_id: `career-pathways-row-231`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 231
- source_category: TRANSPORTATION
- program_name_link: Public Transit Leader - Apprenticeship (https://mission.elumenapp.com/catalog/24-25/program/public-transit-leadership-ca-2023fa)
- location: Mission College

#### Record: Service Mechanic - Apprenticeship (https://mission.elumenapp.com/catalog/24-25/program/public-transit-service-mechanic-apprenticeship-ca-2023fa)
- record_id: `career-pathways-row-232`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 232
- source_category: TRANSPORTATION
- program_name_link: Service Mechanic - Apprenticeship (https://mission.elumenapp.com/catalog/24-25/program/public-transit-service-mechanic-apprenticeship-ca-2023fa)
- location: Mission College

#### Record: Track Worker - Apprenticeship (https://www.missioncollege.edu/student_services/job-placement-internship-center/apprenticeships.html)
- record_id: `career-pathways-row-233`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 233
- source_category: TRANSPORTATION
- program_name_link: Track Worker - Apprenticeship (https://www.missioncollege.edu/student_services/job-placement-internship-center/apprenticeships.html)
- location: Mission College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Meet a Track Worker (https://www.youtube.com/watch?v=adLC8EOXnq0)

#### Record: Automotive and Motorcycle Technology Program (https://www.ccsf.edu/degrees-certificates/automotive-technology)
- record_id: `career-pathways-row-234`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 234
- source_category: TRANSPORTATION
- program_name_link: Automotive and Motorcycle Technology Program (https://www.ccsf.edu/degrees-certificates/automotive-technology)
- location: City College of SF
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with an Automotive Technician (https://open.spotify.com/episode/64d7D5T5pseUubZ11ICeV5)

#### Record: Automotive Pre-Apprenticeship Program (https://www.ccsf.edu/ccsf-academics/career-education/automotive-pre-apprenticeship)
- record_id: `career-pathways-row-235`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 235
- source_category: TRANSPORTATION
- program_name_link: Automotive Pre-Apprenticeship Program (https://www.ccsf.edu/ccsf-academics/career-education/automotive-pre-apprenticeship)
- location: CCSF Evans Campus
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Performance Shop Business Owner (https://open.spotify.com/episode/2etKWo5LSpDVzcAlzXZLpD)

#### Record: Automotive Technology
- record_id: `career-pathways-row-236`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 236
- source_category: TRANSPORTATION
- program_name_link: Automotive Technology
- location: DeAnza College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Diesel Mechanic (https://open.spotify.com/episode/5sp5AFgy9X48GRyk9BCQvw)

#### Record: Automotive Technology
- record_id: `career-pathways-row-237`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 237
- source_category: TRANSPORTATION
- program_name_link: Automotive Technology
- location: Skyline College
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Skyline College Automotive Student Profile (https://youtu.be/XQjPaqy8YRM)

#### Record: Apprentice Automotive Mechanic I (#7383) (https://www.jobapscloud.com/SF/specs/classspecdisplay.asp?ClassNumber=7383)
- record_id: `career-pathways-row-238`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 238
- source_category: TRANSPORTATION
- program_name_link: Apprentice Automotive Mechanic I (#7383) (https://www.jobapscloud.com/SF/specs/classspecdisplay.asp?ClassNumber=7383)
- location: City & County of San Francisco
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: The Female Auto Mechanic (https://www.youtube.com/watch?v=SkSKh1L00Zc)

#### Record: Automotive / Diesel Pre-apprenticeship (https://www.jvs.org/automotive/?mc_cid=ac80a5ae9b&mc_eid=7fa87c5562)
- record_id: `career-pathways-row-239`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 239
- source_category: TRANSPORTATION
- program_name_link: Automotive / Diesel Pre-apprenticeship (https://www.jvs.org/automotive/?mc_cid=ac80a5ae9b&mc_eid=7fa87c5562)
- location: Skyline College

#### Record: Apprentice Automotive Machinist (https://sfdhr.org/apprenticeshipsf-programs)
- record_id: `career-pathways-row-240`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 240
- source_category: TRANSPORTATION
- program_name_link: Apprentice Automotive Machinist (https://sfdhr.org/apprenticeshipsf-programs)
- location: City & County of San Francisco

#### Record: Aviation Maintenance Technology (https://alameda.peralta.edu/academic-program/aviation-maintenance-technology/)
- record_id: `career-pathways-row-241`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 241
- source_category: TRANSPORTATION
- program_name_link: Aviation Maintenance Technology (https://alameda.peralta.edu/academic-program/aviation-maintenance-technology/)
- location: College of Alameda

#### Record: Introduction to Apprenticeship Workshop (https://tradeswomen.org/get-started/)
- record_id: `career-pathways-row-242`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 242
- source_category: TRANSPORTATION
- program_name_link: Introduction to Apprenticeship Workshop (https://tradeswomen.org/get-started/)
- location: Tradeswomen - SF

#### Record: Marine Apprenticeship - Boatworks 101 (https://www.spauldingcenter.org/boatworks-101-apprenticeship)
- record_id: `career-pathways-row-243`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 243
- source_category: TRANSPORTATION
- program_name_link: Marine Apprenticeship - Boatworks 101 (https://www.spauldingcenter.org/boatworks-101-apprenticeship)
- location: Spaulding Marine Center, Sausalito

#### Record: Marine Maintenance Technology (https://www.skagit.edu/academics/areas-of-study/industrial-technology-transportation/marine-maintenance-technology/)
- record_id: `career-pathways-row-244`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 244
- source_category: TRANSPORTATION
- program_name_link: Marine Maintenance Technology (https://www.skagit.edu/academics/areas-of-study/industrial-technology-transportation/marine-maintenance-technology/)
- location: Skagit Valley College, Washington

#### Record: Tesla START Student Automotive Technician Program (https://www.tesla.com/careers/tesla-start)
- record_id: `career-pathways-row-245`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 245
- source_category: TRANSPORTATION
- program_name_link: Tesla START Student Automotive Technician Program (https://www.tesla.com/careers/tesla-start)
- location: Tesla Start Training Program

#### Record: Careers @ SFO (https://www.flysfo.com/careers)
- record_id: `career-pathways-row-246`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 246
- source_category: TRANSPORTATION
- program_name_link: Careers @ SFO (https://www.flysfo.com/careers)
- location: SFO

#### Record: Alaska Airlines Careers (https://alaskaair.jobs/)
- record_id: `career-pathways-row-247`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 247
- source_category: TRANSPORTATION
- program_name_link: Alaska Airlines Careers (https://alaskaair.jobs/)
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: TalkShop with a Flight Attendant (https://open.spotify.com/episode/7zkiYk8AG8PZREeN5q4Kld)

#### Record: United Airlines Careers (https://careers.united.com/)
- record_id: `career-pathways-row-248`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 248
- source_category: TRANSPORTATION
- program_name_link: United Airlines Careers (https://careers.united.com/)

#### Record: BART Careers (https://www.bart.gov/about/jobs)
- record_id: `career-pathways-row-249`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 249
- source_category: TRANSPORTATION
- program_name_link: BART Careers (https://www.bart.gov/about/jobs)

#### Category / Section: MISCELLANEOUS TRAINING PROGRAMS

#### Record: California Apprenticeship Programs (http://www.calapprenticeship.org/)
- record_id: `career-pathways-row-251`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 251
- source_category: MISCELLANEOUS TRAINING PROGRAMS
- program_name_link: California Apprenticeship Programs (http://www.calapprenticeship.org/)
- location: Various

#### Record: Chevron On-the-Job Training (http://careers.chevron.com/professionals/programs)
- record_id: `career-pathways-row-252`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 252
- source_category: MISCELLANEOUS TRAINING PROGRAMS
- program_name_link: Chevron On-the-Job Training (http://careers.chevron.com/professionals/programs)
- location: Various

#### Record: City & County of San Francisco (https://www.jobapscloud.com/SF/)
- record_id: `career-pathways-row-253`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 253
- source_category: MISCELLANEOUS TRAINING PROGRAMS
- program_name_link: City & County of San Francisco (https://www.jobapscloud.com/SF/)
- location: Various

#### Record: Pacific Gas & Electric Power Pathways (https://careers.pge.com/content/TDOverview/?locale=en_US)
- record_id: `career-pathways-row-254`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 254
- source_category: MISCELLANEOUS TRAINING PROGRAMS
- program_name_link: Pacific Gas & Electric Power Pathways (https://careers.pge.com/content/TDOverview/?locale=en_US)
- location: PG&E Power Pathways

#### Record: City of San Mateo - Human Resources (https://www.cityofsanmateo.org/132/Human-Resources)
- record_id: `career-pathways-row-255`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 255
- source_category: MISCELLANEOUS TRAINING PROGRAMS
- program_name_link: City of San Mateo - Human Resources (https://www.cityofsanmateo.org/132/Human-Resources)
- location: Various

#### Record: Community Health Planner/San Mateo County Health (https://www.smchealth.org/smmc-careers)
- record_id: `career-pathways-row-256`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 256
- source_category: MISCELLANEOUS TRAINING PROGRAMS
- program_name_link: Community Health Planner/San Mateo County Health (https://www.smchealth.org/smmc-careers)
- location: Various

#### Record: County of San Mateo Jobs (https://jobs.smcgov.org/)
- record_id: `career-pathways-row-257`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 257
- source_category: MISCELLANEOUS TRAINING PROGRAMS
- program_name_link: County of San Mateo Jobs (https://jobs.smcgov.org/)
- location: Various

#### Record: Job Corps (https://www.jobcorps.gov/train)
- record_id: `career-pathways-row-258`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 258
- source_category: MISCELLANEOUS TRAINING PROGRAMS
- program_name_link: Job Corps (https://www.jobcorps.gov/train)
- location: Various

#### Record: Kaiser Permanente Jobs (https://www.kaiserpermanentejobs.org/)
- record_id: `career-pathways-row-259`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 259
- source_category: MISCELLANEOUS TRAINING PROGRAMS
- program_name_link: Kaiser Permanente Jobs (https://www.kaiserpermanentejobs.org/)
- location: Various

#### Category / Section: MILITARY - SEE YOUR SITE'S COLLEGE & CAREER CENTER FOR RECRUITER VISIT INFO.

#### Record: United States Air Force (https://www.airforce.com/)
- record_id: `career-pathways-row-261`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 261
- source_category: MILITARY - SEE YOUR SITE'S COLLEGE & CAREER CENTER FOR RECRUITER VISIT INFO.
- program_name_link: United States Air Force (https://www.airforce.com/)
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Life in the Air force (https://www.airforce.com/what-to-expect/life-in-the-air-force)

#### Record: United States Army (https://www.goarmy.com/)
- record_id: `career-pathways-row-262`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 262
- source_category: MILITARY - SEE YOUR SITE'S COLLEGE & CAREER CENTER FOR RECRUITER VISIT INFO.
- program_name_link: United States Army (https://www.goarmy.com/)
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Day in the Army (https://www.goarmy.com/army-life/intro-to-army-life/daily-routine)

#### Record: United States Coast Guard (https://www.uscg.mil/)
- record_id: `career-pathways-row-263`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 263
- source_category: MILITARY - SEE YOUR SITE'S COLLEGE & CAREER CENTER FOR RECRUITER VISIT INFO.
- program_name_link: United States Coast Guard (https://www.uscg.mil/)

#### Record: United States Marine Corps (https://www.marines.com/)
- record_id: `career-pathways-row-264`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 264
- source_category: MILITARY - SEE YOUR SITE'S COLLEGE & CAREER CENTER FOR RECRUITER VISIT INFO.
- program_name_link: United States Marine Corps (https://www.marines.com/)
- a_day_in_the_life_watch_listen_to_someone_already_in_this_position: Life in the Marine Corps (https://www.marines.com/life-as-a-marine/life-in-the-marine-corps.html)

#### Record: United States National Guard (https://www.nationalguard.com/)
- record_id: `career-pathways-row-265`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 265
- source_category: MILITARY - SEE YOUR SITE'S COLLEGE & CAREER CENTER FOR RECRUITER VISIT INFO.
- program_name_link: United States National Guard (https://www.nationalguard.com/)

#### Record: United States Navy (https://www.navy.mil/)
- record_id: `career-pathways-row-266`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Career Pathways `
- source_row: 266
- source_category: MILITARY - SEE YOUR SITE'S COLLEGE & CAREER CENTER FOR RECRUITER VISIT INFO.
- program_name_link: United States Navy (https://www.navy.mil/)

### Sheet: Baywork Training Programs by Re

- source_file: `Career Training Programs.xlsx`
- sheet_name: `Baywork Training Programs by Re`
- non_empty_rows: 173

- interpreted_header_row: 1

#### Source Row 1 (header/note)
- column_1: TRAINING INSTITUTION (TI)
- column_2: TRAINING INSTITUTION (TI)
- column_3: CAREER PATH
- column_4: TRAINING PROGRAM (TP) - https://baywork.org/
- column_5: CODE (I=Introductory course; C=classroom only; A=classroom & OJT/apprenticeship; PD=professional development course)
- column_6: LINK TO TRAINING PROGRAM
- column_7: ADDRESS
- column_8: CITY
- column_9: STATE
- column_10: ZI[
- column_11: APPRENTICESHIP?
- column_12: ID (TP)
- column_13: NOTES
- column_14: Full Address
- column_15: LAT
- column_16: LON

#### Record: https://baywork.org/
- record_id: `baywork-training-programs-by-re-row-2`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 2
- training_institution_ti: https://baywork.org/

#### Category / Section: PENINSULA
- column_4: PENINSULA

#### Record: COLLEGE OF SAN MATEO
- record_id: `baywork-training-programs-by-re-row-4`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 4
- source_category: PENINSULA
- training_institution_ti: COLLEGE OF SAN MATEO
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://collegeofsanmateo.edu/powersystems/
- address: 1700 W. Hillsdale Boulevard
- city: San Mateo
- state: CA
- zi: 94402.0
- apprenticeship: N
- id_tp: 1021.0
- full_address: 1700 W. Hillsdale Boulevard, San Mateo, CA, 94402
- lat: 37.5363527
- lon: -122.3371896

#### Record: COLLEGE OF SAN MATEO
- record_id: `baywork-training-programs-by-re-row-5`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 5
- source_category: PENINSULA
- training_institution_ti: COLLEGE OF SAN MATEO
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICAL TECHNOLOGY AND INSIDE WIREMAN APPRENTICESHIP
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://collegeofsanmateo.edu/electrical/
- address: 1700 W. Hillsdale Boulevard
- city: San Mateo
- state: CA
- zi: 94402.0
- apprenticeship: Y
- id_tp: 1022.0
- full_address: 1700 W. Hillsdale Boulevard, San Mateo, CA, 94402
- lat: 37.5363527
- lon: -122.3371896

#### Record: COLLEGE OF SAN MATEO
- record_id: `baywork-training-programs-by-re-row-6`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 6
- source_category: PENINSULA
- training_institution_ti: COLLEGE OF SAN MATEO
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRICAL POWER SYSTEMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://collegeofsanmateo.edu/powersystems/
- address: 1700 W. Hillsdale Boulevard,
- city: San Mateo
- state: CA
- zi: 94402.0
- apprenticeship: N
- id_tp: 1021.0
- full_address: 1700 W. Hillsdale Boulevard, , San Mateo, CA, 94402
- lat: 37.5363527
- lon: -122.3371896

#### Record: COLLEGE OF SAN MATEO
- record_id: `baywork-training-programs-by-re-row-7`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 7
- source_category: PENINSULA
- training_institution_ti: COLLEGE OF SAN MATEO
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://collegeofsanmateo.edu/engineering/degrees.asp
- address: 1700 W. Hillsdale Boulevard
- city: San Mateo
- state: CA
- zi: 94402.0
- apprenticeship: N
- id_tp: 1023.0
- full_address: 1700 W. Hillsdale Boulevard, San Mateo, CA, 94402
- lat: 37.5363527
- lon: -122.3371896

#### Record: FOOTHILL COLLEGE
- record_id: `baywork-training-programs-by-re-row-8`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 8
- source_category: PENINSULA
- training_institution_ti: FOOTHILL COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: GENERAL ELECTRICIAN PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.foothill.edu/programs/programs.php?rec_id=1209
- address: 12345 El Monte Road
- city: Los Altos Hills
- state: CA
- zi: 94022.0
- apprenticeship: Y
- id_tp: 1211.0
- notes: APPRENTICESHIP: http://www.foothill.edu/apprenticeships/contacts.php#Electrical
- full_address: 12345 El Monte Road, Los Altos Hills, CA, 94022
- lat: 37.3620489
- lon: -122.1271421

#### Record: FOOTHILL COLLEGE
- record_id: `baywork-training-programs-by-re-row-9`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 9
- source_category: PENINSULA
- training_institution_ti: FOOTHILL COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.foothill.edu/programs/programs.php?rec_id=1205
- address: 12345 El Monte Road
- city: Los Altos Hills
- state: CA
- zi: 94022.0
- apprenticeship: N
- id_tp: 1212.0
- full_address: 12345 El Monte Road, Los Altos Hills, CA, 94022
- lat: 37.3620489
- lon: -122.1271421

#### Record: SAN MATEO JOINT APPRENTICESHIP AND TRAINING CENTER
- record_id: `baywork-training-programs-by-re-row-10`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 10
- source_category: PENINSULA
- training_institution_ti: SAN MATEO JOINT APPRENTICESHIP AND TRAINING CENTER
- training_institution_ti: UNION
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: INSIDE ELECTRICAL APPRENTICESHIP PROGRAM
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.smjatc617.org/apprenticeship.asp
- address: 625 Industrial Road
- city: San Carlos
- state: CA
- zi: 94070.0
- apprenticeship: Y
- id_tp: 5031.0
- full_address: 625 Industrial Road, San Carlos, CA, 94070
- lat: 37.5105149
- lon: -122.2546593

#### Record: SKYLINE COLLEGE
- record_id: `baywork-training-programs-by-re-row-11`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 11
- source_category: PENINSULA
- training_institution_ti: SKYLINE COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRONICS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.skylinecollege.edu/electronics/index.php
- address: 3300 College Drive
- city: San Bruno
- state: CA
- zi: 94066.0
- apprenticeship: N
- id_tp: 1161.0
- full_address: 3300 College Drive, San Bruno, CA, 94066
- lat: 37.6324305
- lon: -122.4601011

#### Record: CAŇADA COLLEGE
- record_id: `baywork-training-programs-by-re-row-12`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 12
- source_category: PENINSULA
- training_institution_ti: CAŇADA COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEER
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://canadacollege.edu/degrees/?program=ENGR-3AS
- address: 4200 Farm Hill Boulevard
- city: Redwood City
- state: CA
- zi: 94061.0
- apprenticeship: N
- id_tp: 1151.0
- full_address: 4200 Farm Hill Boulevard, Redwood City, CA, 94061
- lat: 37.4473861
- lon: -122.2663635

#### Record: STANFORD
- record_id: `baywork-training-programs-by-re-row-13`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 13
- source_category: PENINSULA
- training_institution_ti: STANFORD
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://engineering.stanford.edu/education/undergraduate-degree-programs
- address: School of Engineering, 475 Via Ortega
- city: Stanford
- state: CA
- zi: 94305.0
- apprenticeship: N
- id_tp: 4021.0
- full_address: School of Engineering, 475 Via Ortega, Stanford, CA, 94305
- lat: 37.428356
- lon: -122.1745669

#### Record: WOODSIDE HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-14`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 14
- source_category: PENINSULA
- training_institution_ti: WOODSIDE HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: CTE: ENGINEERING/ROBOTICS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.woodsidehs.org/?id=432
- address: 199 Churchill Ave
- city: Woodside
- state: CA
- zi: 94062.0
- apprenticeship: N
- id_tp: 2151.0
- full_address: 199 Churchill Ave, Woodside, CA, 94062
- lat: 37.4444725
- lon: -122.2313095

#### Record: DE ANZA COLLEGE
- record_id: `baywork-training-programs-by-re-row-15`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 15
- source_category: PENINSULA
- training_institution_ti: DE ANZA COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: CNC TECHNOLOGY/CNC MACHINISTS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://www.deanza.edu/manufacturing/
- address: 21250 Stevens Creek Blvd.
- city: Cupertino
- state: CA
- zi: 95014.0
- apprenticeship: N
- id_tp: 1221.0
- notes: https://www.deanza.edu/counseling/pdf/degrees/design_manufacturing.pdf
- full_address: 21250 Stevens Creek Blvd., Cupertino, CA, 95014
- lat: 37.3195396
- lon: -122.0450548

#### Category / Section: EAST BAY
- column_4: EAST BAY

#### Record: CASTRO VALLEY ADULT AND CAREER EDUCATION
- record_id: `baywork-training-programs-by-re-row-17`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 17
- source_category: EAST BAY
- training_institution_ti: CASTRO VALLEY ADULT AND CAREER EDUCATION
- training_institution_ti: OTHER
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: MODERN WASWATER TREATMENT PLANT OPERATIONS PROGRAM
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.cvadult.org/courses/career/miscellaneous/item/403-modern-wastewater-treatment-plant-operations-program
- address: 4430 Alma Avenue
- city: Castro Valley
- state: CA
- zi: 94546.0
- apprenticeship: N
- id_tp: 7061.0
- full_address: 4430 Alma Avenue, Castro Valley, CA, 94546
- lat: 37.7080062
- lon: -122.0711852

#### Record: BERKELEY ADULT SCHOOL
- record_id: `baywork-training-programs-by-re-row-18`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 18
- source_category: EAST BAY
- training_institution_ti: BERKELEY ADULT SCHOOL
- training_institution_ti: ROP
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRONICS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://bas.berkeleyschools.net
- address: 1701 San Pablo Ave
- city: Berkeley
- state: CA
- zi: 94702.0
- apprenticeship: N
- full_address: 1701 San Pablo Ave, Berkeley, CA, 94702
- lat: 37.8731785
- lon: -122.2915879

#### Record: CONTRA COSTA COLLEGE
- record_id: `baywork-training-programs-by-re-row-19`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 19
- source_category: EAST BAY
- training_institution_ti: CONTRA COSTA COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.contracosta.edu/programs-departments/engineering/
- address: 2600 Mission Bell Drive
- city: San Pablo
- state: CA
- zi: 94806.0
- apprenticeship: N
- id_tp: 1101.0
- full_address: 2600 Mission Bell Drive, San Pablo, CA, 94806
- lat: 37.968654
- lon: -122.340449

#### Record: DIABLO VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-20`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 20
- source_category: EAST BAY
- training_institution_ti: DIABLO VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING AND ENGINEERING TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.dvc.edu/academics/psed/archi-engin/engineering/index.html
- address: Pleasant Hill Campus: 321 Golf Club Road
- city: Pleasant Hill
- state: CA
- zi: 94523.0
- apprenticeship: N
- id_tp: 1112.0
- full_address: Pleasant Hill Campus: 321 Golf Club Road, Pleasant Hill, CA, 94523
- lat: 37.9689478
- lon: -122.0712913

#### Record: DIABLO VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-21`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 21
- source_category: EAST BAY
- training_institution_ti: DIABLO VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING AND ENGINEERING TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.dvc.edu/academics/psed/archi-engin/engineering/index.html
- address: San Ramon Campus: 1690 Watermill Road
- city: San Ramon
- state: CA
- zi: 94582.0
- apprenticeship: N
- full_address: San Ramon Campus: 1690 Watermill Road, San Ramon, CA, 94582
- lat: 37.7549069
- lon: -121.9098222

#### Record: DIABLO VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-22`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 22
- source_category: EAST BAY
- training_institution_ti: DIABLO VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICAL/ELECTRONICS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.dvc.edu/academics/psed/archi-engin/electronics/index.html
- address: Pleasant Hill Campus: 321 Golf Club Road
- city: Pleasant Hill
- state: CA
- zi: 94523.0
- apprenticeship: N
- id_tp: 1111.0
- full_address: Pleasant Hill Campus: 321 Golf Club Road , Pleasant Hill, CA, 94523
- lat: 37.9689478
- lon: -122.0712913

#### Record: DIABLO VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-23`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 23
- source_category: EAST BAY
- training_institution_ti: DIABLO VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICAL/ELECTRONICS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.dvc.edu/academics/psed/archi-engin/electronics/index.html
- address: San Ramon Campus: 1690 Watermill Road
- city: San Ramon
- state: CA
- zi: 94582.0
- apprenticeship: N
- full_address: San Ramon Campus: 1690 Watermill Road , San Ramon, CA, 94582
- lat: 37.7549069
- lon: -121.9098222

#### Record: DIABLO VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-24`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 24
- source_category: EAST BAY
- training_institution_ti: DIABLO VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRICAL/ELECTRONICS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.dvc.edu/academics/psed/archi-engin/electronics/index.html
- address: Pleasant Hill Campus: 321 Golf Club Road
- city: Pleasant Hill
- state: CA
- zi: 94523.0
- apprenticeship: N
- id_tp: 1111.0
- full_address: Pleasant Hill Campus: 321 Golf Club Road, Pleasant Hill, CA, 94523
- lat: 37.9689478
- lon: -122.0712913

#### Record: DIABLO VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-25`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 25
- source_category: EAST BAY
- training_institution_ti: DIABLO VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRICAL/ELECTRONICS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.dvc.edu/academics/psed/archi-engin/electronics/index.html
- address: San Ramon Campus: 1690 Watermill Road
- city: San Ramon
- state: CA
- zi: 94582.0
- apprenticeship: N
- full_address: San Ramon Campus: 1690 Watermill Road, San Ramon, CA, 94582
- lat: 37.7549069
- lon: -121.9098222

#### Record: DIABLO VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-26`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 26
- source_category: EAST BAY
- training_institution_ti: DIABLO VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MECHANICAL TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.dvc.edu/academics/psed/archi-engin/engineeringtech/index.html
- address: Pleasant Hill Campus: 321 Golf Club Road
- city: Pleasant Hill
- state: CA
- zi: 94523.0
- apprenticeship: N
- id_tp: 1113.0
- full_address: Pleasant Hill Campus: 321 Golf Club Road, Pleasant Hill, CA, 94523
- lat: 37.9689478
- lon: -122.0712913

#### Record: DIABLO VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-27`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 27
- source_category: EAST BAY
- training_institution_ti: DIABLO VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MECHANICAL TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.dvc.edu/academics/psed/archi-engin/engineeringtech/index.html
- address: San Ramon Campus: 1690 Watermill Road
- city: San Ramon
- state: CA
- zi: 94582.0
- apprenticeship: N
- full_address: San Ramon Campus: 1690 Watermill Road, San Ramon, CA, 94582
- lat: 37.7549069
- lon: -121.9098222

#### Record: LANEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-28`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 28
- source_category: EAST BAY
- training_institution_ti: LANEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICAL & ELECTRONICS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.laney.edu/wp/electricity_electronics/
- address: 900 Fallon Street
- city: Oakland
- state: CA
- zi: 94607.0
- apprenticeship: N
- id_tp: 1062.0
- full_address: 900 Fallon Street , Oakland, CA, 94607
- lat: 37.7968647
- lon: -122.2631464

#### Record: LANEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-29`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 29
- source_category: EAST BAY
- training_institution_ti: LANEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRICAL & ELECTRONICS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.laney.edu/wp/electricity_electronics/
- address: 900 Fallon Street
- city: Oakland
- state: CA
- zi: 94607.0
- apprenticeship: N
- id_tp: 1062.0
- full_address: 900 Fallon Street, Oakland, CA, 94607
- lat: 37.7968647
- lon: -122.2631464

#### Record: LANEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-30`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 30
- source_category: EAST BAY
- training_institution_ti: LANEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.laney.edu/wp/architecture_engineering/engineering-home/
- address: 900 Fallon Street
- city: Oakland
- state: CA
- zi: 94607.0
- apprenticeship: N
- id_tp: 1061.0
- full_address: 900 Fallon Street, Oakland, CA, 94607
- lat: 37.7968647
- lon: -122.2631464

#### Record: LANEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-31`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 31
- source_category: EAST BAY
- training_institution_ti: LANEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: INDUSTRIAL MAINTENANCE
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.laney.edu/wp/industrialmaintenance/
- address: 900 Fallon Street
- city: Oakland
- state: CA
- zi: 94607.0
- apprenticeship: N
- id_tp: 1063.0
- full_address: 900 Fallon Street, Oakland, CA, 94607
- lat: 37.7968647
- lon: -122.2631464

#### Record: LANEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-32`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 32
- source_category: EAST BAY
- training_institution_ti: LANEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE/UNION
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.laney.edu/wp/machine_technology/
- address: 900 Fallon Street
- city: Oakland
- state: CA
- zi: 94607.0
- apprenticeship: Y
- id_tp: 1064.0
- notes: APPRENTICESHIP: http://www.laney.edu/wp/machine_technology/machinist-apprenticeship/
- full_address: 900 Fallon Street, Oakland, CA, 94607
- lat: 37.7968647
- lon: -122.2631464

#### Record: LAS POSITAS COLLEGE
- record_id: `baywork-training-programs-by-re-row-33`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 33
- source_category: EAST BAY
- training_institution_ti: LAS POSITAS COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.laspositascollege.edu/engineering/engr-technology.php
- address: 3000 Campus Hill Drive
- city: Livermore
- state: CA
- zi: 94551.0
- apprenticeship: N
- id_tp: 1081.0
- full_address: 3000 Campus Hill Drive , Livermore , CA, 94551
- lat: 37.7108595
- lon: -121.8004765

#### Record: LAS POSITAS COLLEGE
- record_id: `baywork-training-programs-by-re-row-34`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 34
- source_category: EAST BAY
- training_institution_ti: LAS POSITAS COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING TRANSFER PROGRAM
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.laspositascollege.edu/engineering/program.php
- address: 3000 Campus Hill Drive
- city: Livermore
- state: CA
- zi: 94551.0
- apprenticeship: N
- id_tp: 1082.0
- full_address: 3000 Campus Hill Drive , Livermore , CA, 94551
- lat: 37.7108595
- lon: -121.8004765

#### Record: LOS MEDANOS COLLEGE
- record_id: `baywork-training-programs-by-re-row-35`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 35
- source_category: EAST BAY
- training_institution_ti: LOS MEDANOS COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.losmedanos.edu/departments/eng/default.asp
- address: 2700 East Leland Rd.
- city: Pittsburg
- state: CA
- zi: 94565.0
- apprenticeship: N
- id_tp: 1122.0
- full_address: 2700 East Leland Rd., Pittsburg, CA, 94565
- lat: 38.005398
- lon: -121.8603083

#### Record: LOS MEDANOS COLLEGE
- record_id: `baywork-training-programs-by-re-row-36`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 36
- source_category: EAST BAY
- training_institution_ti: LOS MEDANOS COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICAL AND INSTRUMENTATION TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.losmedanos.edu/EETEC/default.asp
- address: 2700 East Leland Rd.
- city: Pittsburg
- state: CA
- zi: 94565.0
- apprenticeship: N
- id_tp: 1121.0
- full_address: 2700 East Leland Rd., Pittsburg, CA, 94565
- lat: 38.005398
- lon: -121.8603083

#### Record: LOS MEDANOS COLLEGE
- record_id: `baywork-training-programs-by-re-row-37`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 37
- source_category: EAST BAY
- training_institution_ti: LOS MEDANOS COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRICAL AND INSTRUMENTATION TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.losmedanos.edu/EETEC/default.asp
- address: 2700 East Leland Rd.
- city: Pittsburg
- state: CA
- zi: 94565.0
- apprenticeship: N
- id_tp: 1121.0
- full_address: 2700 East Leland Rd., Pittsburg, CA, 94565
- lat: 38.005398
- lon: -121.8603083

#### Record: CHABOT COLLEGE
- record_id: `baywork-training-programs-by-re-row-38`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 38
- source_category: EAST BAY
- training_institution_ti: CHABOT COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TOOL TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.chabotcollege.edu/MTT/
- address: 25555 Hesperian Blvd.
- city: Hayward
- state: CA
- zi: 94545.0
- apprenticeship: N
- id_tp: 1072.0
- full_address: 25555 Hesperian Blvd. , Hayward, CA, 94545
- lat: 37.6398046
- lon: -122.1069105

#### Record: CHABOT COLLEGE
- record_id: `baywork-training-programs-by-re-row-39`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 39
- source_category: EAST BAY
- training_institution_ti: CHABOT COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICAL APPRENTICESHIP TRAINING (INSIDE WIREMAN)
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.chabotcollege.edu/apprenticeship/electrical.asp
- address: 25555 Hesperian Blvd.
- city: Hayward
- state: CA
- zi: 94545.0
- apprenticeship: Y
- id_tp: 1071.0
- full_address: 25555 Hesperian Blvd. , Hayward, CA, 94545
- lat: 37.6398046
- lon: -122.1069105

#### Record: CHABOT COLLEGE
- record_id: `baywork-training-programs-by-re-row-40`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 40
- source_category: EAST BAY
- training_institution_ti: CHABOT COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.chabotcollege.edu/academics/ENGINEERING.asp
- address: 25555 Hesperian Blvd.
- city: Hayward
- state: CA
- zi: 94545.0
- apprenticeship: N
- id_tp: 1073.0
- full_address: 25555 Hesperian Blvd. , Hayward, CA, 94545
- lat: 37.6398046
- lon: -122.1069105

#### Record: CONSTRUCTION CRAFT TRAINING CENTER
- record_id: `baywork-training-programs-by-re-row-41`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 41
- source_category: EAST BAY
- training_institution_ti: CONSTRUCTION CRAFT TRAINING CENTER
- training_institution_ti: OTHER
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ACCELERATED AND HYBRID OPTIONS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://www.cctc.edu/
- address: 26232 Industrial Blvd
- city: Hayward
- state: CA
- zi: 94545.0
- apprenticeship: N
- id_tp: 7041.0
- full_address: 26232 Industrial Blvd, Hayward, CA, 94545
- lat: 37.634524
- lon: -122.1113618

#### Record: UC BERKELEY
- record_id: `baywork-training-programs-by-re-row-42`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 42
- source_category: EAST BAY
- training_institution_ti: UC BERKELEY
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://engineering.berkeley.edu/academics/undergraduate-programs
- address: 320 McLaughlin Hall # 1700, University of California
- city: Berkeley
- state: CA
- zi: 94720.0
- apprenticeship: N
- id_tp: 4051.0
- full_address: 320 McLaughlin Hall # 1700, University of California , Berkeley, CA, 94720
- lat: 37.8738176
- lon: -122.2590219

#### Record: ST. MARY'S COLLEGE
- record_id: `baywork-training-programs-by-re-row-43`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 43
- source_category: EAST BAY
- training_institution_ti: ST. MARY'S COLLEGE
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: ENGINEER
- training_program_tp_https_baywork_org: 3+2 Dual-DEGREE ENGINEERING PROGRAM
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.stmarys-ca.edu/engineering
- address: 1928 Saint Marys Road
- city: Moraga
- state: CA
- zi: 94575.0
- apprenticeship: N
- id_tp: 4091.0
- full_address: 1928 Saint Marys Road, Moraga, CA, 94575
- lat: 37.8413472
- lon: -122.1101353

#### Record: ARROYO HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-44`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 44
- source_category: EAST BAY
- training_institution_ti: ARROYO HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: TREND Academy
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://ahs.schoolloop.com/trendhome
- address: 15701 Lorenzo Ave.
- city: San Lorenzo
- state: CA
- zi: 94580
- apprenticeship: N
- id_tp: 2081.0
- full_address: 15701 Lorenzo Ave., San Lorenzo, CA, 94580
- lat: 37.6802527
- lon: -122.1394333

#### Record: CLAYTON VALLEY CHARTER HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-45`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 45
- source_category: EAST BAY
- training_institution_ti: CLAYTON VALLEY CHARTER HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING AND DESIGN ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.claytonvalley.org/apps/pages/index.jsp?type=d&uREC_ID=202178&pREC_ID=438777
- address: 1101 Alberta Way
- city: Concord
- state: CA
- zi: 94521
- apprenticeship: N
- id_tp: 2041.0
- full_address: 1101 Alberta Way, Concord, CA, 94521
- lat: 37.9502407
- lon: -121.9694685

#### Record: DUBLIN HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-46`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 46
- source_category: EAST BAY
- training_institution_ti: DUBLIN HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING AND DESIGN ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.dublin.k12.ca.us/domain/627
- address: 8151 Village Parkway
- city: Dublin
- state: CA
- zi: 94568.0
- apprenticeship: N
- id_tp: 2111.0
- full_address: 8151 Village Parkway, Dublin, CA, 94568
- lat: 37.7203071
- lon: -121.9241556

#### Record: LIVERMORE HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-47`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 47
- source_category: EAST BAY
- training_institution_ti: LIVERMORE HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: GREEN ENGINEERING ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.livermorehigh.com/gea
- address: 600 Maple Street
- city: Livermore
- state: CA
- zi: 94550
- apprenticeship: N
- id_tp: 2031.0
- full_address: 600 Maple Street, Livermore, CA, 94550
- lat: 37.6804969
- lon: -121.7617767

#### Record: SAN LORENZO HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-48`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 48
- source_category: EAST BAY
- training_institution_ti: SAN LORENZO HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: GREEN ENGINEERING AND TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://slzhs.schoolloop.com/cms/nothing?d=x&group_id=1251955275360
- address: 50 E. Lewelling Blvd.
- city: San Lorenzo
- state: CA
- zi: 94580
- apprenticeship: N
- id_tp: 2091.0
- full_address: 50 E. Lewelling Blvd., San Lorenzo, CA, 94580
- lat: 37.688571
- lon: -122.122524

#### Record: CWEA (California Water Environmental Association)
- record_id: `baywork-training-programs-by-re-row-49`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 49
- source_category: EAST BAY
- training_institution_ti: CWEA (California Water Environmental Association)
- training_institution_ti: OTHER
- career_path: ENGINEER
- training_program_tp_https_baywork_org: PROFESSIONAL TRAINING OPPORTUNITIES AND CERTIFICATION
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://www.cwea.org/et.shtml
- address: 7677 Oakport Street, Suite 600
- city: Oakland
- state: CA
- zi: 94621.0
- apprenticeship: N
- id_tp: 7011.0
- full_address: 7677 Oakport Street, Suite 600, Oakland, CA, 94621
- lat: 37.7469114
- lon: -122.2034299

#### Record: MISSION VALLEY ROP
- record_id: `baywork-training-programs-by-re-row-50`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 50
- source_category: EAST BAY
- training_institution_ti: MISSION VALLEY ROP
- training_institution_ti: ROP
- career_path: ENGINEER
- training_program_tp_https_baywork_org: CIVIL ENGINEERING AND ARCHITECTURE
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.mvrop.org/domain/41
- address: 5019 Stevenson Blvd
- city: Fremont
- state: CA
- zi: 94538.0
- apprenticeship: N
- id_tp: 3052.0
- full_address: 5019 Stevenson Blvd, Fremont, CA, 94538
- lat: 37.5281881
- lon: -121.983995

#### Record: TRI-VALLEY ROP
- record_id: `baywork-training-programs-by-re-row-51`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 51
- source_category: EAST BAY
- training_institution_ti: TRI-VALLEY ROP
- training_institution_ti: ROP
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING AND ARCHITECTURE
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.tvrop.org/#!engineering--design/c1doq
- address: 1040 Florence Rd.
- city: Livermore
- state: CA
- zi: 94550.0
- apprenticeship: N
- id_tp: 3032.0
- full_address: 1040 Florence Rd., Livermore, CA, 94550
- lat: 37.6691535
- lon: -121.7742828

#### Record: CASTRO VALLEY HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-52`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 52
- source_category: EAST BAY
- training_institution_ti: CASTRO VALLEY HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.cv.k12.ca.us/cvhs
- address: 19400 Santa Maria Ave.
- city: Castro Valley
- state: CA
- zi: 94546.0
- apprenticeship: N
- full_address: 19400 Santa Maria Ave., Castro Valley, CA, 94546
- lat: 37.7045003
- lon: -122.0762991

#### Record: GRANADA HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-53`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 53
- source_category: EAST BAY
- training_institution_ti: GRANADA HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.granadahigh.com
- address: 400 Wall Street
- city: Livermore
- state: CA
- zi: 94550
- apprenticeship: N
- full_address: 400 Wall Street, Livermore, CA, 94550
- lat: 37.6748601
- lon: -121.787591

#### Record: JOHN SWETT HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-54`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 54
- source_category: EAST BAY
- training_institution_ti: JOHN SWETT HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: ENGINEERING/ADVANCED MANUFACTURING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://jshs.jsusd.org/academics-06c050b4/rop-cte-7210aa93
- address: 1098 Pomona St.
- city: Crockett
- state: CA
- zi: 94525.0
- apprenticeship: N
- id_tp: 2021.0
- full_address: 1098 Pomona St., Crockett, CA, 94525
- lat: 38.0528844
- lon: -122.2212149

#### Record: LIVERMORE HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-55`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 55
- source_category: EAST BAY
- training_institution_ti: LIVERMORE HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://livermorehs.schoolloop.com
- address: 600 Maple Street
- city: Livermore
- state: CA
- zi: 94550
- apprenticeship: N
- full_address: 600 Maple Street, Livermore, CA, 94550
- lat: 37.6804969
- lon: -121.7617767

#### Record: MISSION VALLEY ROP
- record_id: `baywork-training-programs-by-re-row-56`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 56
- source_category: EAST BAY
- training_institution_ti: MISSION VALLEY ROP
- training_institution_ti: ROP
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: AUTOMOTIVE TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.mvrop.org/Page/652
- address: 5019 Stevenson Blvd
- city: Fremont
- state: CA
- zi: 94538.0
- apprenticeship: N
- id_tp: 3051.0
- full_address: 5019 Stevenson Blvd, Fremont, CA, 94538
- lat: 37.5281881
- lon: -121.983995

#### Record: TRI-VALLEY ROP
- record_id: `baywork-training-programs-by-re-row-57`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 57
- source_category: EAST BAY
- training_institution_ti: TRI-VALLEY ROP
- training_institution_ti: ROP
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: AUTOMOTIVE SPECIALIST
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.tvrop.org/#!transportation/cnoa
- address: 1040 Florence Rd.
- city: Livermore
- state: CA
- zi: 94550.0
- apprenticeship: N
- id_tp: 3033.0
- full_address: 1040 Florence Rd., Livermore, CA, 94550
- lat: 37.6691535
- lon: -121.7742828

#### Record: ADVANCED MANUFACTURING AND TRANSPORTATION APPRENTICESHIPS OF CALIFORNIA
- record_id: `baywork-training-programs-by-re-row-58`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 58
- source_category: EAST BAY
- training_institution_ti: ADVANCED MANUFACTURING AND TRANSPORTATION APPRENTICESHIPS OF CALIFORNIA
- training_institution_ti: UNION
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: AUTO AND MACHINIST PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: https://amtac-apprentice.org
- address: 10260 MacArthur Blvd
- city: Oakland
- state: CA
- zi: 94605.0
- apprenticeship: Y
- full_address: 10260 MacArthur Blvd, Oakland, CA, 94605
- lat: 37.7374324
- lon: -122.202624

#### Category / Section: NORTH BAY
- column_4: NORTH BAY

#### Record: SONOMA STATE UNIVERSITY
- record_id: `baywork-training-programs-by-re-row-60`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 60
- source_category: NORTH BAY
- training_institution_ti: SONOMA STATE UNIVERSITY
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.sonoma.edu/engineering/
- address: Salazar Hall 2004, 1801 East Cotati Ave
- city: Rohnert Park
- state: CA
- zi: 94928.0
- apprenticeship: N
- id_tp: 4081.0
- full_address: Salazar Hall 2004, 1801 East Cotati Ave , Rohnert Park, CA, 94928
- lat: 38.3401919
- lon: -122.6741261

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-61`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 61
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICIAN APPRENTICESHIP
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://workexperience.santarosa.edu/electrician-apprenticeship
- address: Santa Rosa Campus: 1501 Mendocino Ave.,
- city: Santa Rosa
- state: CA
- zi: 95401.0
- apprenticeship: Y
- id_tp: 1051.0
- full_address: Santa Rosa Campus: 1501 Mendocino Ave., , Santa Rosa, CA, 95401
- lat: 38.4551932
- lon: -122.7201417

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-62`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 62
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICIAN APPRENTICESHIP
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://workexperience.santarosa.edu/electrician-apprenticeship
- address: Petaluma Campus: 680 Sonoma Mtn. Parkway
- city: Petaluma
- state: CA
- zi: 94954.0
- apprenticeship: Y
- full_address: Petaluma Campus: 680 Sonoma Mtn. Parkway, Petaluma, CA, 94954
- lat: 38.2675796
- lon: -122.6351578

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-63`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 63
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://appliedtechnology.santarosa.edu/engineering
- address: Santa Rosa Campus: 1501 Mendocino Ave.,
- city: Santa Rosa
- state: CA
- zi: 95401.0
- apprenticeship: N
- id_tp: 1053.0
- full_address: Santa Rosa Campus: 1501 Mendocino Ave., , Santa Rosa, CA, 95401
- lat: 38.4551932
- lon: -122.7201417

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-64`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 64
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://appliedtechnology.santarosa.edu/engineering
- address: Petaluma Campus: 680 Sonoma Mtn. Parkway
- city: Petaluma
- state: CA
- zi: 94954.0
- apprenticeship: N
- full_address: Petaluma Campus: 680 Sonoma Mtn. Parkway, Petaluma, CA, 94954
- lat: 38.2675796
- lon: -122.6351578

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-65`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 65
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: CIVIL ENGINEERING TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://appliedtechnology.santarosa.edu/civil-engineering-technology
- address: Santa Rosa Campus: 1501 Mendocino Ave.,
- city: Santa Rosa
- state: CA
- zi: 95401.0
- apprenticeship: N
- id_tp: 1054.0
- full_address: Santa Rosa Campus: 1501 Mendocino Ave., , Santa Rosa, CA, 95401
- lat: 38.4551932
- lon: -122.7201417

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-66`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 66
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: CIVIL ENGINEERING TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://appliedtechnology.santarosa.edu/civil-engineering-technology
- address: Petaluma Campus: 680 Sonoma Mtn. Parkway
- city: Petaluma
- state: CA
- zi: 94954.0
- apprenticeship: N
- full_address: Petaluma Campus: 680 Sonoma Mtn. Parkway, Petaluma, CA, 94954
- lat: 38.2675796
- lon: -122.6351578

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-67`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 67
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TOOL TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.santarosa.edu/instruction/itt/machine-tool-technology.php
- address: Santa Rosa Campus: 1501 Mendocino Ave.,
- city: Santa Rosa
- state: CA
- zi: 95401.0
- apprenticeship: N
- id_tp: 1052.0
- full_address: Santa Rosa Campus: 1501 Mendocino Ave., , Santa Rosa, CA, 95401
- lat: 38.4551932
- lon: -122.7201417

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-68`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 68
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TOOL TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.santarosa.edu/instruction/itt/machine-tool-technology.php
- address: Petaluma Campus: 680 Sonoma Mtn. Parkway
- city: Petaluma
- state: CA
- zi: 94954.0
- apprenticeship: N
- full_address: Petaluma Campus: 680 Sonoma Mtn. Parkway, Petaluma, CA, 94954
- lat: 38.2675796
- lon: -122.6351578

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-69`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 69
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WASTE WATER TREATMENT TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://appliedtechnology.santarosa.edu/waste-water-treatment-technology
- address: Santa Rosa Campus: 1501 Mendocino Ave.,
- city: Santa Rosa
- state: CA
- zi: 95401.0
- apprenticeship: N
- id_tp: 1055.0
- full_address: Santa Rosa Campus: 1501 Mendocino Ave., , Santa Rosa, CA, 95401
- lat: 38.4551932
- lon: -122.7201417

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-70`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 70
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WASTE WATER TREATMENT TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://appliedtechnology.santarosa.edu/waste-water-treatment-technology
- address: Petaluma Campus: 680 Sonoma Mtn. Parkway
- city: Petaluma
- state: CA
- zi: 94954.0
- apprenticeship: N
- full_address: Petaluma Campus: 680 Sonoma Mtn. Parkway, Petaluma, CA, 94954
- lat: 38.2675796
- lon: -122.6351578

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-71`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 71
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WATER TREATMENT TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://appliedtechnology.santarosa.edu/water-treatment-technology
- address: Santa Rosa Campus: 1501 Mendocino Ave.,
- city: Santa Rosa
- state: CA
- zi: 95401.0
- apprenticeship: N
- id_tp: 1055.0
- full_address: Santa Rosa Campus: 1501 Mendocino Ave., , Santa Rosa, CA, 95401
- lat: 38.4551932
- lon: -122.7201417

#### Record: SANTA ROSA JUNIOR COLLEGE
- record_id: `baywork-training-programs-by-re-row-72`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 72
- source_category: NORTH BAY
- training_institution_ti: SANTA ROSA JUNIOR COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WATER TREATMENT TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://appliedtechnology.santarosa.edu/water-treatment-technology
- address: Petaluma Campus: 680 Sonoma Mtn. Parkway
- city: Petaluma
- state: CA
- zi: 94954.0
- apprenticeship: N
- full_address: Petaluma Campus: 680 Sonoma Mtn. Parkway, Petaluma, CA, 94954
- lat: 38.2675796
- lon: -122.6351578

#### Record: REDWOOD EMPIRE JATC
- record_id: `baywork-training-programs-by-re-row-73`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 73
- source_category: NORTH BAY
- training_institution_ti: REDWOOD EMPIRE JATC
- training_institution_ti: UNION
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: INSIDE ELECTRICAL APPRENTICESHIP
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.rejatc.org/?zone=/unionactive/view_page.cfm&page=Apprenticeship20Program
- address: 1700 Corby Avenue, Suite A
- city: Santa Rosa
- state: CA
- zi: 95407
- apprenticeship: Y
- id_tp: 5091.0
- full_address: 1700 Corby Avenue, Suite A, Santa Rosa, CA, 95407
- lat: 38.4223191
- lon: -122.7162955

#### Record: SOLANO-NAPA JATC
- record_id: `baywork-training-programs-by-re-row-74`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 74
- source_category: NORTH BAY
- training_institution_ti: SOLANO-NAPA JATC
- training_institution_ti: UNION
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: INSIDE ELECTRICAL APPRENTICESHIP PROGRAM
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.jatclu180.org/
- address: 720-A Technology Way
- city: Napa
- state: CA
- zi: 94558
- apprenticeship: Y
- id_tp: 5071.0
- full_address: 720-A Technology Way, Napa, CA, 94558
- lat: 38.2245835
- lon: -122.2668278

#### Record: TRI-COUNTY ELECTRICAL JATC
- record_id: `baywork-training-programs-by-re-row-75`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 75
- source_category: NORTH BAY
- training_institution_ti: TRI-COUNTY ELECTRICAL JATC
- training_institution_ti: UNION
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: INSIDE ELECTRICAL APPRENTICESHIP
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.tricountyjatc.org/apprenticeship/
- address: 10300 Merritt Street
- city: Castroville
- state: CA
- zi: 95012.0
- apprenticeship: Y
- id_tp: 5081.0
- full_address: 10300 Merritt Street, Castroville, CA, 95012
- lat: 36.7683863
- lon: -121.761949

#### Record: COLLEGE OF MARIN
- record_id: `baywork-training-programs-by-re-row-76`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 76
- source_category: NORTH BAY
- training_institution_ti: COLLEGE OF MARIN
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRONICS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=62
- address: Kentfield Campus: 835 College Avenue
- city: Kentfield
- state: CA
- zi: 94904.0
- apprenticeship: N
- id_tp: 1132.0
- notes: Career option: Industrial Controls Technician
- full_address: Kentfield Campus: 835 College Avenue, Kentfield, CA, 94904
- lat: 37.9547429
- lon: -122.5490072

#### Record: COLLEGE OF MARIN
- record_id: `baywork-training-programs-by-re-row-77`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 77
- source_category: NORTH BAY
- training_institution_ti: COLLEGE OF MARIN
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRONICS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=63
- address: Indian Valley Campus: 1800 Ignacio Blvd.
- city: Novato
- state: CA
- zi: 94950.0
- apprenticeship: N
- full_address: Indian Valley Campus: 1800 Ignacio Blvd., Novato, CA, 94950
- lat: 38.0776393
- lon: -122.5838183

#### Record: COLLEGE OF MARIN
- record_id: `baywork-training-programs-by-re-row-78`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 78
- source_category: NORTH BAY
- training_institution_ti: COLLEGE OF MARIN
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGENEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=55
- address: Kentfield Campus: 835 College Avenue
- city: Kentfield
- state: CA
- zi: 94904.0
- apprenticeship: N
- id_tp: 1133.0
- full_address: Kentfield Campus: 835 College Avenue, Kentfield, CA, 94904
- lat: 37.9547429
- lon: -122.5490072

#### Record: COLLEGE OF MARIN
- record_id: `baywork-training-programs-by-re-row-79`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 79
- source_category: NORTH BAY
- training_institution_ti: COLLEGE OF MARIN
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGENEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=56
- address: Indian Valley Campus: 1800 Ignacio Blvd.
- city: Novato
- state: CA
- zi: 94950.0
- apprenticeship: N
- full_address: Indian Valley Campus: 1800 Ignacio Blvd., Novato, CA, 94950
- lat: 38.0776393
- lon: -122.5838183

#### Record: COLLEGE OF MARIN
- record_id: `baywork-training-programs-by-re-row-80`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 80
- source_category: NORTH BAY
- training_institution_ti: COLLEGE OF MARIN
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE AND METALS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=64
- address: Kentfield Campus: 835 College Avenue
- city: Kentfield
- state: CA
- zi: 94904.0
- apprenticeship: N
- id_tp: 1131.0
- full_address: Kentfield Campus: 835 College Avenue, Kentfield, CA, 94904
- lat: 37.9547429
- lon: -122.5490072

#### Record: COLLEGE OF MARIN
- record_id: `baywork-training-programs-by-re-row-81`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 81
- source_category: NORTH BAY
- training_institution_ti: COLLEGE OF MARIN
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE AND METALS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=64
- address: Indian Valley Campus: 1800 Ignacio Blvd.,
- city: Novato
- state: CA
- zi: 94949.0
- apprenticeship: N
- full_address: Indian Valley Campus: 1800 Ignacio Blvd., , Novato, CA, 94949
- lat: 38.0776393
- lon: -122.5838183

#### Record: NAPA VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-82`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 82
- source_category: NORTH BAY
- training_institution_ti: NAPA VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.napavalley.edu/Academics/SME/Engineering/Pages/default.aspx
- address: Napa Campus: 2277 Napa-Vallejo Highway
- city: Napa
- state: CA
- zi: 94558.0
- apprenticeship: N
- id_tp: 1032.0
- full_address: Napa Campus: 2277 Napa-Vallejo Highway, Napa, CA, 94558
- lat: 38.27471
- lon: -122.2762012

#### Record: NAPA VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-83`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 83
- source_category: NORTH BAY
- training_institution_ti: NAPA VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.napavalley.edu/Academics/SME/Engineering/Pages/default.aspx
- address: St. Helena Campus: 1088 College Avenue
- city: St. Helena
- state: CA
- zi: 94574.0
- apprenticeship: N
- full_address: St. Helena Campus: 1088 College Avenue, St. Helena, CA, 94574
- lat: 38.5095355
- lon: -122.4566162

#### Record: NAPA VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-84`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 84
- source_category: NORTH BAY
- training_institution_ti: NAPA VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TOOL TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.napavalley.edu/Academics/TechnicalDivision/MACH/Pages/default.aspx
- address: Napa Campus: 2277 Napa-Vallejo Highway
- city: Napa
- state: CA
- zi: 94558.0
- apprenticeship: N
- id_tp: 1031.0
- full_address: Napa Campus: 2277 Napa-Vallejo Highway, Napa, CA, 94558
- lat: 38.27471
- lon: -122.2762012

#### Record: NAPA VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-85`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 85
- source_category: NORTH BAY
- training_institution_ti: NAPA VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TOOL TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.napavalley.edu/Academics/TechnicalDivision/MACH/Pages/default.aspx
- address: St. Helena Campus: 1088 College Avenue
- city: St. Helena
- state: CA
- zi: 94574.0
- apprenticeship: N
- full_address: St. Helena Campus: 1088 College Avenue, St. Helena, CA, 94574
- lat: 38.5095355
- lon: -122.4566162

#### Record: MARIN COUNTY ROP
- record_id: `baywork-training-programs-by-re-row-86`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 86
- source_category: NORTH BAY
- training_institution_ti: MARIN COUNTY ROP
- training_institution_ti: ROP
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRONICS/ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.marinschools.org/ROP/Pages/Courses.aspx
- address: 1111 Las Gallinas Ave
- city: San Rafael
- state: CA
- zi: 94913.0
- apprenticeship: N
- id_tp: 3021.0
- full_address: 1111 Las Gallinas Ave, San Rafael, CA, 94913
- lat: 38.0137103
- lon: -122.550179

#### Record: MARIN COUNTY ROP
- record_id: `baywork-training-programs-by-re-row-87`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 87
- source_category: NORTH BAY
- training_institution_ti: MARIN COUNTY ROP
- training_institution_ti: ROP
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: AGRICULTURAL MECHANICS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.marinschools.org/ROP/Documents/Agricultural%20Mechanics.pdf
- address: 1111 Las Gallinas Ave
- city: San Rafael
- state: CA
- zi: 94913.0
- apprenticeship: N
- id_tp: 3022.0
- full_address: 1111 Las Gallinas Ave, San Rafael, CA, 94913
- lat: 38.0137103
- lon: -122.550179

#### Record: MARIN COUNTY ROP
- record_id: `baywork-training-programs-by-re-row-88`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 88
- source_category: NORTH BAY
- training_institution_ti: MARIN COUNTY ROP
- training_institution_ti: ROP
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: AUTO TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.marinschools.org/ROP/Documents/Auto%20Technology.pdf
- address: 1111 Las Gallinas Ave
- city: San Rafael
- state: CA
- zi: 94913.0
- apprenticeship: N
- id_tp: 3023.0
- full_address: 1111 Las Gallinas Ave, San Rafael , CA, 94913
- lat: 38.0137103
- lon: -122.550179

#### Record: MARIN COUNTY ROP
- record_id: `baywork-training-programs-by-re-row-89`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 89
- source_category: NORTH BAY
- training_institution_ti: MARIN COUNTY ROP
- training_institution_ti: ROP
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: WELDING OCUPATIONS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.marinschools.org/ROP/Documents/Welding%20Occupations.pdf
- address: 1111 Las Gallinas Ave
- city: San Rafael
- state: CA
- zi: 94913.0
- apprenticeship: N
- id_tp: 3024.0
- notes: More relevant to welding & sheetmetal working - not as relevant to W/WW
- full_address: 1111 Las Gallinas Ave, San Rafael, CA, 94913
- lat: 38.0137103
- lon: -122.550179

#### Record: MARIN COUNTY ROP
- record_id: `baywork-training-programs-by-re-row-90`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 90
- source_category: NORTH BAY
- training_institution_ti: MARIN COUNTY ROP
- training_institution_ti: ROP
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: CONSTRUCTION TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.marinschools.org/ROP/Documents/Construction%20Technology.pdf
- address: 1111 Las Gallinas Ave
- city: San Rafael
- state: CA
- zi: 94913.0
- apprenticeship: N
- id_tp: 3025.0
- notes: More focused on construction trades; not relevant to W/WW
- full_address: 1111 Las Gallinas Ave, San Rafael, CA, 94913
- lat: 38.0137103
- lon: -122.550179

#### Record: CSU - CALIFORNIA MARITIME ACADEMY
- record_id: `baywork-training-programs-by-re-row-91`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 91
- source_category: NORTH BAY
- training_institution_ti: CSU - CALIFORNIA MARITIME ACADEMY
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://www.csum.edu/web/academics/departments-schools
- address: 200 Maritime Academy Drive
- city: Vallejo
- state: CA
- zi: 94590.0
- apprenticeship: N
- id_tp: 4041.0
- full_address: 200 Maritime Academy Drive, Vallejo, CA, 94590
- lat: 38.0692105
- lon: -122.2325063

#### Record: RICHMOND HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-92`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 92
- source_category: NORTH BAY
- training_institution_ti: RICHMOND HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PARTNERSHIP ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.wccusd.net/Page/3605
- address: 1250 23rd St.
- city: Richmond
- state: CA
- zi: 94804.0
- apprenticeship: N
- id_tp: 2131.0
- full_address: 1250 23rd St. , Richmond, CA, 94804
- lat: 37.951913
- lon: -122.3474258

#### Record: VALLEJO HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-93`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 93
- source_category: NORTH BAY
- training_institution_ti: VALLEJO HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://vhs-vcusd-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1408076049631
- address: 840 Nebraska St.
- city: Vallejo
- state: CA
- zi: 94590.0
- apprenticeship: N
- id_tp: 2051.0
- full_address: 840 Nebraska St., Vallejo, CA, 94590
- lat: 38.1141626
- lon: -122.2452103

#### Record: SAN LEANDRO HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-94`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 94
- source_category: NORTH BAY
- training_institution_ti: SAN LEANDRO HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.sanleandro.k12.ca.us/Page/519
- address: 2200 Bancroft Ave.
- city: San Leandro
- state: CA
- zi: 94577.0
- apprenticeship: N
- full_address: 2200 Bancroft Ave., San Leandro, CA, 94577
- lat: 37.7178626
- lon: -122.1432409

#### Record: PETALUMA HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-95`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 95
- source_category: NORTH BAY
- training_institution_ti: PETALUMA HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://petalumahighschool.weebly.com
- address: 201 Fair Street
- city: Petaluma
- state: CA
- zi: 94952.0
- apprenticeship: N
- full_address: 201 Fair Street, Petaluma, CA, 94952
- lat: 38.2280053
- lon: -122.6475174

#### Record: VINTAGE HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-96`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 96
- source_category: NORTH BAY
- training_institution_ti: VINTAGE HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: AUTOMOTIVE TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: https://media.wix.com/ugd/7d780b_bb4b22d8f1e84c74866f7b5043668e08.pdf
- address: 1375 Trower Avenue
- city: Napa
- state: CA
- zi: 94558
- apprenticeship: N
- id_tp: 2242.0
- full_address: 1375 Trower Avenue, Napa, CA, 94558
- lat: 38.3338967
- lon: -122.3054222

#### Record: CALIFORNIA TOOLING & MACHINING APPRENTICESHIP ASSOCIATION
- record_id: `baywork-training-programs-by-re-row-97`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 97
- source_category: NORTH BAY
- training_institution_ti: CALIFORNIA TOOLING & MACHINING APPRENTICESHIP ASSOCIATION
- training_institution_ti: UNION
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: CTMAA APPRENTICESHIPS/ PROGRAM FINDER
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: https://www.calmachinist.com/index.php?p=pages&id=13https://www.calmachinist.com/index.php?p=apprentice&id=3
- address: PO Box 750785
- city: Petaluma
- state: CA
- zi: 94954
- apprenticeship: Y
- id_tp: 7051.0
- notes: It is not a specific apprenticeship program; it is a facilitation page
- full_address: PO Box 750785 , Petaluma, CA, 94954
- lat: 38.232417
- lon: -122.6366524

#### Record: AMERICAN CANYON HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-98`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 98
- source_category: NORTH BAY
- training_institution_ti: AMERICAN CANYON HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: CONSTRUCTION TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.nvusd.k12.ca.us/ccr
- address: 3000 Newell Drive
- city: American Canyon
- state: CA
- zi: 94503.0
- apprenticeship: N
- id_tp: 2221.0
- notes: Appears to include sustainable construction only - not relevant to W/WW
- full_address: 3000 Newell Drive, American Canyon , CA, 94503
- lat: 38.1668258
- lon: -122.2380128

#### Record: BENICIA HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-99`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 99
- source_category: NORTH BAY
- training_institution_ti: BENICIA HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: ECH2OACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://bhsecho.weebly.com/
- address: 1101 Military West
- city: Benicia
- state: CA
- zi: 94510
- apprenticeship: N
- id_tp: 2211.0
- notes: More generic/introductory curriculum; Includes wastewater treatment.
- full_address: 1101 Military West, Benicia, CA, 94510
- lat: 38.0648321
- lon: -122.1756587

#### Record: NAPA HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-100`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 100
- source_category: NORTH BAY
- training_institution_ti: NAPA HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: CONSTRUCTION TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.nvusd.k12.ca.us/ccr
- address: 2475  Jefferson St.
- city: Napa
- state: CA
- zi: 94558
- apprenticeship: N
- id_tp: 2231.0
- notes: Appears to include sustainable construction only - not relevant to W/WW
- full_address: 2475  Jefferson St., Napa, CA, 94558
- lat: 38.3109106
- lon: -122.2978079

#### Record: SOQUEL HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-101`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 101
- source_category: NORTH BAY
- training_institution_ti: SOQUEL HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: GMEC ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://soquel.sccs.net/academics/g_m_e_c_academy
- address: 401 Old San Jose Road
- city: Soquel
- state: CA
- zi: 95073.0
- apprenticeship: N
- id_tp: 2161.0
- notes: More generic/introductory curriculum; Includes engine repair & etech.
- full_address: 401 Old San Jose Road, Soquel, CA, 95073
- lat: 36.9916719
- lon: -121.9596925

#### Record: VINTAGE HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-102`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 102
- source_category: NORTH BAY
- training_institution_ti: VINTAGE HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: CONSTRUCTION TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.nvusd.k12.ca.us/ccr
- address: 1375 Trower Avenue
- city: Napa
- state: CA
- zi: 94558
- apprenticeship: N
- id_tp: 2241.0
- notes: Does not appear to be active.
- full_address: 1375 Trower Avenue, Napa, CA, 94558
- lat: 38.3338967
- lon: -122.3054222

#### Record: ROP SANTA CRUZ COUNTY
- record_id: `baywork-training-programs-by-re-row-103`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 103
- source_category: NORTH BAY
- training_institution_ti: ROP SANTA CRUZ COUNTY
- training_institution_ti: ROP
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: METAL FABRICATION
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.rop.santacruz.k12.ca.us/portal/courses/index.php?sector=Manufacturing
- address: 399 Encinal Street
- city: Santa Cruz
- state: CA
- zi: 95060.0
- apprenticeship: N
- id_tp: 3041.0
- notes: More relevant to welding & sheetmetal working - not as relevant to W/WW
- full_address: 399 Encinal Street, Santa Cruz , CA, 95060
- lat: 36.9872171
- lon: -122.0385564

#### Record: SOLANO COMMUNITY COLLEGE
- record_id: `baywork-training-programs-by-re-row-104`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 104
- source_category: NORTH BAY
- training_institution_ti: SOLANO COMMUNITY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WATER & WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.solano.edu/sciences/water_wastewater_tech.php
- address: 4000 Suisan Valley Rd.
- city: Fairfield
- state: CA
- zi: 94534.0
- apprenticeship: N
- id_tp: 1141.0
- notes: In addition to campus, there are three college centers
- full_address: 4000 Suisan Valley Rd. , Fairfield, CA, 94534
- lat: 38.2348293
- lon: -122.1235419

#### Record: SOLANO COMMUNITY COLLEGE
- record_id: `baywork-training-programs-by-re-row-105`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 105
- source_category: NORTH BAY
- training_institution_ti: SOLANO COMMUNITY COLLEGE
- training_institution_ti: OTHER
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: SOLANO WATER AND WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.solano.edu/degrees/1617/water.pdf
- address: 4000 Suisun Valley Rd
- city: Fairfield
- state: CA
- zi: 94534.0
- apprenticeship: N
- id_tp: 7021.0
- full_address: 4000 Suisun Valley Rd, Fairfield, CA, 94534
- lat: 38.2348293
- lon: -122.1235419

#### Record: SOLANO COMMUNITY COLLEGE
- record_id: `baywork-training-programs-by-re-row-106`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 106
- source_category: NORTH BAY
- training_institution_ti: SOLANO COMMUNITY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WATER DISTRIBUTION OPERATOR
- training_program_tp_https_baywork_org: WATER & WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.solano.edu/sciences/water_wastewater_tech.php
- address: 4000 Suisun Valley Rd
- city: Fairfield
- state: CA
- zi: 94534.0
- apprenticeship: N
- id_tp: 1141.0
- notes: In addition to campus, there are three college centers
- full_address: 4000 Suisun Valley Rd, Fairfield, CA, 94534
- lat: 38.2348293
- lon: -122.1235419

#### Record: SOLANO COMMUNITY COLLEGE
- record_id: `baywork-training-programs-by-re-row-107`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 107
- source_category: NORTH BAY
- training_institution_ti: SOLANO COMMUNITY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WASTEWATER COLLECTIONS OPERATOR
- training_program_tp_https_baywork_org: WATER & WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.solano.edu/sciences/water_wastewater_tech.php
- address: 4000 Suisan Valley Rd.
- city: Fairfield
- state: CA
- zi: 94534.0
- apprenticeship: N
- id_tp: 1141.0
- notes: WATER 121: Collection Systems Maintenance - 2 CreditsWATER 121: Collection Systems Maintenance - 2 Credits
- full_address: 4000 Suisan Valley Rd. , Fairfield, CA, 94534
- lat: 38.2348293
- lon: -122.1235419

#### Record: SOLANO COMMUNITY COLLEGE
- record_id: `baywork-training-programs-by-re-row-108`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 108
- source_category: NORTH BAY
- training_institution_ti: SOLANO COMMUNITY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: WATER & WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.solano.edu/sciences/water_wastewater_tech.php
- address: 4000 Suisan Valley Rd.
- city: Fairfield
- state: CA
- zi: 94534.0
- apprenticeship: N
- id_tp: 1141.0
- notes: WATER 106: Instrumentation & Controls - 3 Credits
- full_address: 4000 Suisan Valley Rd. , Fairfield, CA, 94534
- lat: 38.2348293
- lon: -122.1235419

#### Record: SOLANO COMMUNITY COLLEGE
- record_id: `baywork-training-programs-by-re-row-109`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 109
- source_category: NORTH BAY
- training_institution_ti: SOLANO COMMUNITY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: WATER & WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.solano.edu/sciences/water_wastewater_tech.php
- address: 4000 Suisan Valley Rd.
- city: Fairfield
- state: CA
- zi: 94534.0
- apprenticeship: N
- id_tp: 1141.0
- notes: WATER 106: Instrumentation & Controls - 3 Credits
- full_address: 4000 Suisan Valley Rd. , Fairfield, CA, 94534
- lat: 38.2348293
- lon: -122.1235419

#### Record: SOLANO COMMUNITY COLLEGE
- record_id: `baywork-training-programs-by-re-row-110`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 110
- source_category: NORTH BAY
- training_institution_ti: SOLANO COMMUNITY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEER
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.solano.edu/degrees/1516/EINGINEER.pdf
- address: 4000 Suisan Valley Rd.
- city: Fairfield
- state: CA
- zi: 94534.0
- apprenticeship: N
- id_tp: 1142.0
- notes: In addition to campus, there are three college centers
- full_address: 4000 Suisan Valley Rd. , Fairfield, CA, 94534
- lat: 38.2348293
- lon: -122.1235419

#### Record: SOLANO COMMUNITY COLLEGE
- record_id: `baywork-training-programs-by-re-row-111`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 111
- source_category: NORTH BAY
- training_institution_ti: SOLANO COMMUNITY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WATER & WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.solano.edu/sciences/water_wastewater_tech.php
- address: 4000 Suisun Valley Rd
- city: Fairfield
- state: CA
- zi: 94534.0
- apprenticeship: N
- id_tp: 1141.0
- notes: In addition to campus, there are three college centers
- full_address: 4000 Suisun Valley Rd, Fairfield, CA, 94534
- lat: 38.2348293
- lon: -122.1235419

#### Record: BACWWE (Bay Area Consortium of Water and Wastewater Education)
- record_id: `baywork-training-programs-by-re-row-112`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 112
- source_category: NORTH BAY
- training_institution_ti: BACWWE (Bay Area Consortium of Water and Wastewater Education)
- training_institution_ti: OTHER
- career_path: WATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: BACWWE/SOLANO WATER AND WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.bacwwe.org/program-description/course-descriptions/
- address: 4000 Suisun Valley Rd
- city: Fairfield
- state: CA
- zi: 94534.0
- apprenticeship: N
- id_tp: 7021.0
- full_address: 4000 Suisun Valley Rd, Fairfield, CA, 94534
- lat: 38.2348293
- lon: -122.1235419

#### Record: TRI-VALLEY ROP
- record_id: `baywork-training-programs-by-re-row-113`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 113
- source_category: NORTH BAY
- training_institution_ti: TRI-VALLEY ROP
- training_institution_ti: ROP
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: ENERGY, ENVIRONMENT AND UTILITIES
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.tvrop.org/#!energy--utilities/c1g7h
- address: 1040 Florence Rd.
- city: Livermore
- state: CA
- zi: 94550.0
- apprenticeship: N
- id_tp: 3031.0
- full_address: 1040 Florence Rd., Livermore, CA, 94550
- lat: 37.6691535
- lon: -121.7742828

#### Category / Section: SOUTH BAY
- column_4: SOUTH BAY

#### Record: SAN JOSE CITY COLLEGE
- record_id: `baywork-training-programs-by-re-row-115`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 115
- source_category: SOUTH BAY
- training_institution_ti: SAN JOSE CITY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICIAN TRAINEE COURSES
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.sjcc.edu/academics/departments-divisions/electrician-apprenticeship
- address: 2100 Moorpark Avenue
- city: San Jose
- state: CA
- zi: 95128.0
- apprenticeship: Y
- id_tp: 1201.0
- notes: Appears to be intro course for electrician apprenticeship
- full_address: 2100 Moorpark Avenue, San Jose, CA, 95128
- lat: 37.315671
- lon: -121.930156

#### Record: SAN JOSE CITY COLLEGE
- record_id: `baywork-training-programs-by-re-row-116`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 116
- source_category: SOUTH BAY
- training_institution_ti: SAN JOSE CITY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MACHINE TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.sjcc.edu/academics/departments-divisions/machine-technology
- address: 2100 Moorpark Avenue
- city: San Jose
- state: CA
- zi: 95128.0
- apprenticeship: N
- id_tp: 1202.0
- full_address: 2100 Moorpark Avenue, San Jose, CA, 95128
- lat: 37.315671
- lon: -121.930156

#### Record: IBT SAN JOSE CAREER COLLEGE
- record_id: `baywork-training-programs-by-re-row-117`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 117
- source_category: SOUTH BAY
- training_institution_ti: IBT SAN JOSE CAREER COLLEGE
- training_institution_ti: OTHER
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICIAN TRAINING AT IBT
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://ibttech.com/electrician/
- address: 2400 Walsh Ave
- city: Santa Clara
- state: CA
- zi: 95051.0
- apprenticeship: N
- id_tp: 7031.0
- full_address: 2400 Walsh Ave, Santa Clara, CA, 95051
- lat: 37.3686167
- lon: -121.9695133

#### Record: SANTA CLARA COUNTY ELECTRICAL JATC 332
- record_id: `baywork-training-programs-by-re-row-118`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 118
- source_category: SOUTH BAY
- training_institution_ti: SANTA CLARA COUNTY ELECTRICAL JATC 332
- training_institution_ti: UNION
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: APPRENTICESHIP PROGRAMS (COMMERCIAL AND RESIDENTIAL)
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.ejatc332.org/
- address: 908 Bern Court
- city: San Jose
- state: CA
- zi: 95112.0
- apprenticeship: Y
- id_tp: 5051.0
- full_address: 908 Bern Court, San Jose, CA, 95112
- lat: 37.3754803
- lon: -121.8931749

#### Record: CABRILLO COLLEGE
- record_id: `baywork-training-programs-by-re-row-119`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 119
- source_category: SOUTH BAY
- training_institution_ti: CABRILLO COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING TECHNNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.cabrillo.edu/academics/etech/
- address: 6500 Soquel Drive
- city: Aptos
- state: CA
- zi: 95003.0
- apprenticeship: N
- id_tp: 1041.0
- full_address: 6500 Soquel Drive , Aptos , CA, 95003
- lat: 36.9870845
- lon: -121.9255315

#### Record: CABRILLO COLLEGE
- record_id: `baywork-training-programs-by-re-row-120`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 120
- source_category: SOUTH BAY
- training_institution_ti: CABRILLO COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.cabrillo.edu/academics/engineering/
- address: 6500 Soquel Drive
- city: Aptos
- state: CA
- zi: 95003.0
- apprenticeship: N
- id_tp: 1042.0
- full_address: 6500 Soquel Drive , Aptos , CA, 95003
- lat: 36.9870845
- lon: -121.9255315

#### Record: EVERGREEN COLLEGE
- record_id: `baywork-training-programs-by-re-row-121`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 121
- source_category: SOUTH BAY
- training_institution_ti: EVERGREEN COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.evc.edu/academics/divisions-departments/engineering
- address: 3095 Yerba Buena Road
- city: San Jose
- state: CA
- zi: 95135.0
- apprenticeship: N
- id_tp: 1191.0
- full_address: 3095 Yerba Buena Road, San Jose, CA, 95135
- lat: 37.3015309
- lon: -121.7618422

#### Record: EVERGREEN COLLEGE
- record_id: `baywork-training-programs-by-re-row-122`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 122
- source_category: SOUTH BAY
- training_institution_ti: EVERGREEN COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WASTEWATER COURSES
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.evc.edu/
- address: 3095 Yerba Buena Road
- city: San Jose
- state: CA
- zi: 95135.0
- apprenticeship: N
- id_tp: 1192.0
- full_address: 3095 Yerba Buena Road, San Jose, CA, 95135
- lat: 37.3015309
- lon: -121.7618422

#### Record: HARTNELL COLLEGE
- record_id: `baywork-training-programs-by-re-row-123`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 123
- source_category: SOUTH BAY
- training_institution_ti: HARTNELL COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.hartnell.edu/engineering
- address: 411 Central Ave
- city: Salinas
- state: CA
- zi: 93901.0
- apprenticeship: N
- id_tp: 1241.0
- full_address: 411 Central Ave, Salinas, CA, 93901
- lat: 36.6739876
- lon: -121.6656719

#### Record: MISSION COLLEGE
- record_id: `baywork-training-programs-by-re-row-124`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 124
- source_category: SOUTH BAY
- training_institution_ti: MISSION COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.missioncollege.edu/depts/engineer/index.html
- address: 3000 Mission College Boulevard
- city: Santa Clara
- state: CA
- zi: 95054.0
- apprenticeship: N
- id_tp: 1171.0
- full_address: 3000 Mission College Boulevard , Santa Clara, CA, 95054
- lat: 37.3912164
- lon: -121.9820461

#### Record: OHLONE COLLEGE
- record_id: `baywork-training-programs-by-re-row-125`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 125
- source_category: SOUTH BAY
- training_institution_ti: OHLONE COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.ohlone.edu/instr/engineering/
- address: Newark Campus: 39399 Cherry Street
- city: Newark
- state: CA
- zi: 94560.0
- apprenticeship: N
- id_tp: 1091.0
- full_address: Newark Campus: 39399 Cherry Street, Newark, CA, 94560
- lat: 37.5172593
- lon: -122.004275

#### Record: OHLONE COLLEGE
- record_id: `baywork-training-programs-by-re-row-126`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 126
- source_category: SOUTH BAY
- training_institution_ti: OHLONE COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.ohlone.edu/instr/engineering/
- address: Fremont Campus: 43600 Mission Boulevard
- city: Fremont
- zi: 94539.0
- full_address: Fremont Campus: 43600 Mission Boulevard, Fremont, , 94539
- lat: 37.5300423
- lon: -121.9150642

#### Record: WEST VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-127`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 127
- source_category: SOUTH BAY
- training_institution_ti: WEST VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://westvalley.edu/academics/applied_arts_sciences/engineering/
- address: 14000 Fruitvale Avenue
- city: Saratoga
- state: CA
- zi: 95070.0
- apprenticeship: N
- id_tp: 1181.0
- full_address: 14000 Fruitvale Avenue, Saratoga, CA, 95070
- lat: 37.2644633
- lon: -122.0099752

#### Record: SAN JOSE STATE UNIVERSITY
- record_id: `baywork-training-programs-by-re-row-128`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 128
- source_category: SOUTH BAY
- training_institution_ti: SAN JOSE STATE UNIVERSITY
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://engineering.sjsu.edu/programs
- address: One Washington Square
- city: San Jose
- state: CA
- zi: 95192.0
- apprenticeship: N
- id_tp: 4031.0
- full_address: One Washington Square, San Jose, CA, 95192
- lat: 37.3351424
- lon: -121.8812758

#### Record: SANTA CLARA UNIVERSITY
- record_id: `baywork-training-programs-by-re-row-129`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 129
- source_category: SOUTH BAY
- training_institution_ti: SANTA CLARA UNIVERSITY
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://www.scu.edu/engineering/
- address: 500 El Camino Real
- city: Santa Clara
- state: CA
- zi: 95053.0
- apprenticeship: N
- id_tp: 4071.0
- full_address: 500 El Camino Real, Santa Clara, CA, 95053
- lat: 37.3499521
- lon: -121.940608

#### Record: UC SANTA CRUZ
- record_id: `baywork-training-programs-by-re-row-130`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 130
- source_category: SOUTH BAY
- training_institution_ti: UC SANTA CRUZ
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://ua.soe.ucsc.edu/programs
- address: 1156 High Street
- city: Santa Cruz
- state: CA
- zi: 95064.0
- apprenticeship: N
- id_tp: 4061.0
- full_address: 1156 High Street, Santa Cruz, CA, 95064
- lat: 37.000369
- lon: -122.0632371

#### Record: ALISAL HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-131`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 131
- source_category: SOUTH BAY
- training_institution_ti: ALISAL HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://ahs.salinasuhsd.org/pages/AlisalHigh
- address: 777 Williams Road
- city: Salinas
- state: CA
- zi: 93905.0
- apprenticeship: N
- id_tp: 2141.0
- full_address: 777 Williams Road, Salinas, CA, 93905
- lat: 36.6846868
- lon: -121.6020867

#### Record: INDEPENDENCE HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-132`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 132
- source_category: SOUTH BAY
- training_institution_ti: INDEPENDENCE HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ELECTRONICS & SPACE-TECH ACADEMIES
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://ihs.schoolloop.com/AcademiesPrograms
- address: 1776 Educational Park Drive
- city: San Jose
- state: CA
- zi: 95133
- apprenticeship: N
- id_tp: 2061.0
- full_address: 1776 Educational Park Drive, San Jose, CA, 95133
- lat: 37.3667466
- lon: -121.857916

#### Record: MILPITAS HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-133`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 133
- source_category: SOUTH BAY
- training_institution_ti: MILPITAS HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING AND TECHNOLOGY ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://sites.google.com/a/musd.org/etechacademy/home
- address: 1285 Escuela Parkway
- city: Milpitas
- state: CA
- zi: 95035.0
- apprenticeship: N
- id_tp: 2191.0
- full_address: 1285 Escuela Parkway, Milpitas, CA, 95035
- lat: 37.4509315
- lon: -121.9005301

#### Record: OVERFELT HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-134`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 134
- source_category: SOUTH BAY
- training_institution_ti: OVERFELT HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ELECTRONICS ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://wo.esuhsd.org/programs/programs.html
- address: 1835 Cunningham Avenue
- city: San Jose
- state: CA
- zi: 95122.0
- apprenticeship: N
- id_tp: 2181.0
- notes: The Electronics Academy offers national PLTW engineering curriculum.
- full_address: 1835 Cunningham Avenue, San Jose, CA, 95122
- lat: 37.3323884
- lon: -121.8296676

#### Record: WATSONVILLE HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-135`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 135
- source_category: SOUTH BAY
- training_institution_ti: WATSONVILLE HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING AND TECHNOLOGY ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://whs-pajaro-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1295705505015
- address: 250 East Beach Street
- city: Watsonville
- state: CA
- zi: 95076
- apprenticeship: N
- id_tp: 2201.0
- full_address: 250 East Beach Street, Watsonville, CA, 95076
- lat: 36.9131957
- lon: -121.7524559

#### Record: ROP SANTA CRUZ COUNTY
- record_id: `baywork-training-programs-by-re-row-136`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 136
- source_category: SOUTH BAY
- training_institution_ti: ROP SANTA CRUZ COUNTY
- training_institution_ti: ROP
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.rop.santacruz.k12.ca.us/portal/courses/index.php?sector=Engineering
- address: 399 Encinal Street
- city: Santa Cruz
- state: CA
- zi: 95060.0
- apprenticeship: N
- id_tp: 3042.0
- full_address: 399 Encinal Street, Santa Cruz , CA, 95060
- lat: 36.9872171
- lon: -122.0385564

#### Record: ROP SANTA CRUZ COUNTY
- record_id: `baywork-training-programs-by-re-row-137`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 137
- source_category: SOUTH BAY
- training_institution_ti: ROP SANTA CRUZ COUNTY
- training_institution_ti: ROP
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: CONSTRUCTION TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.rop.santacruz.k12.ca.us/portal/courses/index.php?sector=Building
- address: 399 Encinal Street
- city: Santa Cruz
- state: CA
- zi: 95060.0
- apprenticeship: N
- id_tp: 3044.0
- notes: Appears to include construction trades primarily - not relevant to W/WW.
- full_address: 399 Encinal Street, Santa Cruz , CA, 95060
- lat: 36.9872171
- lon: -122.0385564

#### Record: DEL MAR HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-138`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 138
- source_category: SOUTH BAY
- training_institution_ti: DEL MAR HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: PRODUCT TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://delmar.cuhsd.org
- address: 1224 Del Mar Ave
- city: San Jose
- state: CA
- zi: 95128.0
- full_address: 1224 Del Mar Ave, San Jose, CA, 95128
- lat: 37.3039605
- lon: -121.9285835

#### Record: WESTMONT HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-139`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 139
- source_category: SOUTH BAY
- training_institution_ti: WESTMONT HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: MANUFACTURING TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://westmont.cuhsd.org
- address: 4805 Westmont Avenue
- city: Campbell
- state: CA
- zi: 95008.0
- apprenticeship: N
- full_address: 4805 Westmont Avenue, Campbell, CA, 95008
- lat: 37.2706921
- lon: -121.9851263

#### Record: SANTA CRUZ COUNTY
- record_id: `baywork-training-programs-by-re-row-140`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 140
- source_category: SOUTH BAY
- training_institution_ti: SANTA CRUZ COUNTY
- training_institution_ti: ROP
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: ENGINE REPAIR
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.rop.santacruz.k12.ca.us/portal/courses/index.php?sector=Transportation
- address: 399 Encinal Street
- city: Santa Cruz
- state: CA
- zi: 95060.0
- apprenticeship: N
- id_tp: 3043.0
- full_address: 399 Encinal Street, Santa Cruz , CA, 95060
- lat: 36.9872171
- lon: -122.0385564

#### Record: SILICON VALLEY CTE
- record_id: `baywork-training-programs-by-re-row-141`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 141
- source_category: SOUTH BAY
- training_institution_ti: SILICON VALLEY CTE
- training_institution_ti: ROP
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICAL MAINTENACE
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.metroed.net/SVCTE/svcte-classes/
- address: 760 Hillsdale Ave
- city: San Jose
- state: CA
- zi: 95136.0
- apprenticeship: N
- id_tp: 3012.0
- full_address: 760 Hillsdale Ave, San Jose, CA, 95136
- lat: 37.2779037
- lon: -121.8659821

#### Record: SILICON VALLEY CTE
- record_id: `baywork-training-programs-by-re-row-142`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 142
- source_category: SOUTH BAY
- training_institution_ti: SILICON VALLEY CTE
- training_institution_ti: ROP
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: ENGINEERING FOR MANUFACTURING TECHNOLOGY (FORMELY KNOWN AS PRECISION MACHINING)
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.metroed.net/SVCTE/svcte-classes/
- address: 760 Hillsdale Ave
- city: San Jose
- state: CA
- zi: 95136.0
- apprenticeship: N
- id_tp: 3011.0
- full_address: 760 Hillsdale Ave, San Jose, CA, 95136
- lat: 37.2779037
- lon: -121.8659821

#### Record: SILICON VALLEY CTE
- record_id: `baywork-training-programs-by-re-row-143`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 143
- source_category: SOUTH BAY
- training_institution_ti: SILICON VALLEY CTE
- training_institution_ti: ROP
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: AUTOMATIVE SERVICES
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.metroed.net/SVCTE/svcte-classes/
- address: 760 Hillsdale Ave
- city: San Jose
- state: CA
- zi: 95136.0
- apprenticeship: N
- id_tp: 3015.0
- full_address: 760 Hillsdale Ave, San Jose, CA, 95136
- lat: 37.2779037
- lon: -121.8659821

#### Record: SILICON VALLEY CTE
- record_id: `baywork-training-programs-by-re-row-144`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 144
- source_category: SOUTH BAY
- training_institution_ti: SILICON VALLEY CTE
- training_institution_ti: ROP
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: METALS TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.metroed.net/SVCTE/svcte-classes/
- address: 760 Hillsdale Ave
- city: San Jose
- state: CA
- zi: 95136.0
- apprenticeship: N
- id_tp: 3014.0
- notes: More relevant to welding & sheetmetal working - not as relevant to W/WW
- full_address: 760 Hillsdale Ave, San Jose, CA, 95136
- lat: 37.2779037
- lon: -121.8659821

#### Record: SILICON VALLEY CTE
- record_id: `baywork-training-programs-by-re-row-145`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 145
- source_category: SOUTH BAY
- training_institution_ti: SILICON VALLEY CTE
- training_institution_ti: ROP
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: CONSTRUCTION TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.metroed.net/SVCTE/svcte-classes/
- address: 760 Hillsdale Ave
- city: San Jose
- state: CA
- zi: 95136.0
- apprenticeship: N
- id_tp: 3016.0
- notes: Appears to include construction trades primarily - not relevant to W/WW.
- full_address: 760 Hillsdale Ave, San Jose, CA, 95136
- lat: 37.2779037
- lon: -121.8659821

#### Record: SILICON VALLEY CTE
- record_id: `baywork-training-programs-by-re-row-146`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 146
- source_category: SOUTH BAY
- training_institution_ti: SILICON VALLEY CTE
- training_institution_ti: ROP
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRICAL MAINTENACE
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.metroed.net/SVCTE/svcte-classes/
- address: 760 Hillsdale Ave
- city: San Jose
- state: CA
- zi: 95136.0
- apprenticeship: N
- id_tp: 3013.0
- full_address: 760 Hillsdale Ave, San Jose, CA, 95136
- lat: 37.2779037
- lon: -121.8659821

#### Record: GAVILAN COLLEGE
- record_id: `baywork-training-programs-by-re-row-147`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 147
- source_category: SOUTH BAY
- training_institution_ti: GAVILAN COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WASTEWATER COLLECTIONS OPERATOR
- training_program_tp_https_baywork_org: WATER AND WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.gavilan.edu/water/
- address: 5055 Santa Teresa Blvd.
- city: Gilroy
- state: CA
- zi: 95020.0
- apprenticeship: N
- id_tp: 1011.0
- full_address: 5055 Santa Teresa Blvd., Gilroy, CA, 95020
- lat: 36.9732557
- lon: -121.5685598

#### Record: GAVILAN COLLEGE
- record_id: `baywork-training-programs-by-re-row-148`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 148
- source_category: SOUTH BAY
- training_institution_ti: GAVILAN COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PROGRAM Gavilan-Cabrillo Pathway
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://hhh.gavilan.edu/rlee/gavilanengineering.html
- address: 5055 Santa Teresa Blvd.
- city: Gilroy
- state: CA
- zi: 95020.0
- apprenticeship: N
- id_tp: 1012.0
- full_address: 5055 Santa Teresa Blvd., Gilroy, CA, 95020
- lat: 36.9732557
- lon: -121.5685598

#### Record: GAVILAN COLLEGE
- record_id: `baywork-training-programs-by-re-row-149`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 149
- source_category: SOUTH BAY
- training_institution_ti: GAVILAN COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WATER AND WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.gavilan.edu/water/
- address: 5055 Santa Teresa Blvd.
- city: Gilroy
- state: CA
- zi: 95020.0
- apprenticeship: N
- id_tp: 1011.0
- full_address: 5055 Santa Teresa Blvd., Gilroy, CA, 95020
- lat: 36.9732557
- lon: -121.5685598

#### Record: GAVILAN COLLEGE
- record_id: `baywork-training-programs-by-re-row-150`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 150
- source_category: SOUTH BAY
- training_institution_ti: GAVILAN COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WATER DISTRIBUTION OPERATOR
- training_program_tp_https_baywork_org: WATER AND WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.gavilan.edu/water/
- address: 5055 Santa Teresa Blvd.
- city: Gilroy
- state: CA
- zi: 95020.0
- apprenticeship: N
- id_tp: 1011.0
- full_address: 5055 Santa Teresa Blvd., Gilroy, CA, 95020
- lat: 36.9732557
- lon: -121.5685598

#### Record: GAVILAN COLLEGE
- record_id: `baywork-training-programs-by-re-row-151`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 151
- source_category: SOUTH BAY
- training_institution_ti: GAVILAN COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WATER AND WASTEWATER TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.gavilan.edu/water/
- address: 5055 Santa Teresa Blvd.
- city: Gilroy
- state: CA
- zi: 95020.0
- apprenticeship: N
- id_tp: 1011.0
- full_address: 5055 Santa Teresa Blvd., Gilroy, CA, 95020
- lat: 36.9732557
- lon: -121.5685598

#### Record: SALINAS HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-152`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 152
- source_category: SOUTH BAY
- training_institution_ti: SALINAS HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: SALINAS HIGH GREEN BUILDING ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.shsgogreen.com/
- address: 726 South Main Street
- city: Salinas
- state: CA
- zi: 93901.0
- apprenticeship: N
- id_tp: 2121.0
- notes: Construction-focused curriculum but includes wastewater operator in targeted job titles.
- full_address: 726 South Main Street, Salinas, CA, 93901
- lat: 36.6669833
- lon: -121.6566991

#### Record: WEST VALLEY COLLEGE
- record_id: `baywork-training-programs-by-re-row-153`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 153
- source_category: SOUTH BAY
- training_institution_ti: WEST VALLEY COLLEGE
- training_institution_ti: COMMUNITY COLLEGE
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: PREPARATION COURSE FOR CERTIFICATION EXAM ON WATER TREATMENT
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://westvalley.edu/
- address: 14000 Fruitvale Avenue
- city: Saratoga
- state: CA
- zi: 95070.0
- apprenticeship: N
- id_tp: 1182.0
- full_address: 14000 Fruitvale Avenue, Saratoga, CA, 95070
- lat: 37.2644633
- lon: -122.0099752

#### Record: CLAYTON VALLEY CHARTER HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-154`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 154
- source_category: SOUTH BAY
- training_institution_ti: CLAYTON VALLEY CHARTER HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: CTE: ENGINEERING/AUTO
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.claytonvalley.org/apps/pages/index.jsp?type=d&uREC_ID=193517&pREC_ID=staff
- address: 1101 Alberta Way
- city: Concord
- state: CA
- zi: 94521
- apprenticeship: N
- id_tp: 2042.0
- notes: Not clear about courses offered.
- full_address: 1101 Alberta Way, Concord, CA, 94521
- lat: 37.9502407
- lon: -121.9694685

#### Record: KENNEDY HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-155`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 155
- source_category: SOUTH BAY
- training_institution_ti: KENNEDY HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: BUILDING GREEN BUILDING SMART ACADEMY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.fremont.k12.ca.us/Page/29112
- address: 39999 Blacow Road
- city: Fremont
- state: CA
- zi: 94538.0
- apprenticeship: N
- id_tp: 2071.0
- notes: Appears to include construction trades primarily - not relevant to W/WW.
- full_address: 39999 Blacow Road, Fremont, CA, 94538
- lat: 37.5286578
- lon: -121.9866462

#### Record: MOUNT DIABLO HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-156`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 156
- source_category: SOUTH BAY
- training_institution_ti: MOUNT DIABLO HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: SKILL BUILDERS
- training_program_tp_https_baywork_org: CONSTRUCTION TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://mdhs.mdusd.org/cms/page_view?d=x&piid=&vpid=1445243121114
- address: 2450 Grant St.
- city: Concord
- state: CA
- zi: 94520
- apprenticeship: N
- id_tp: 2101.0
- notes: Appears to include construction trades primarily - not relevant to W/WW.
- full_address: 2450 Grant St., Concord, CA, 94520
- lat: 37.9828883
- lon: -122.0362927

#### Category / Section: SAN FRANCISCO
- column_4: SAN FRANCISCO

#### Record: SAN FRANCISCO JOINT APPRENTICESHIP AND TRAINING CENTER
- record_id: `baywork-training-programs-by-re-row-158`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 158
- source_category: SAN FRANCISCO
- training_institution_ti: SAN FRANCISCO JOINT APPRENTICESHIP AND TRAINING CENTER
- training_institution_ti: UNION
- career_path: ELECTRICIAN
- training_program_tp_https_baywork_org: ELECTRICAL APPRENTICESHIP PROGRAM
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.sfelectricaltraining.org/index-apprenticeship.html
- address: 4056 Mission Street
- city: San Francisco
- state: CA
- zi: 94112.0
- apprenticeship: Y
- id_tp: 5011.0
- full_address: 4056 Mission Street, San Francisco, CA, 94112
- lat: 37.7327997
- lon: -122.427735

#### Record: CITY COLLEGE OF SAN FRANCISCO
- record_id: `baywork-training-programs-by-re-row-159`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 159
- source_category: SAN FRANCISCO
- training_institution_ti: CITY COLLEGE OF SAN FRANCISCO
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ELECTRONICS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.ccsf.edu/en/educational-programs/school-and-departments/school-of-science-and-mathematics/engineering-and-technology/electronics_program.html
- address: 50 Phelan Avenue
- city: San Francisco
- state: CA
- zi: 94112.0
- apprenticeship: N
- id_tp: 1231.0
- full_address: 50 Phelan Avenue, San Francisco, CA, 94112
- lat: 37.724695
- lon: -122.4529324

#### Record: CITY COLLEGE OF SAN FRANCISCO
- record_id: `baywork-training-programs-by-re-row-160`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 160
- source_category: SAN FRANCISCO
- training_institution_ti: CITY COLLEGE OF SAN FRANCISCO
- training_institution_ti: COMMUNITY COLLEGE
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.ccsf.edu/en/educational-programs/school-and-departments/school-of-science-and-mathematics/engineering-and-technology.html
- address: 50 Phelan Avenue
- city: San Francisco
- state: CA
- zi: 94112.0
- apprenticeship: N
- id_tp: 1232.0
- full_address: 50 Phelan Avenue, San Francisco, CA, 94112
- lat: 37.724695
- lon: -122.4529324

#### Record: JOHN O'CONNELL HIGH
- record_id: `baywork-training-programs-by-re-row-161`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 161
- source_category: SAN FRANCISCO
- training_institution_ti: JOHN O'CONNELL HIGH
- training_institution_ti: HIGH SCHOOL
- career_path: ELECTRONIC MAINTENANCE TECHNICIAN/INSTRUMENT TECHNICIAN
- training_program_tp_https_baywork_org: ENVIRONMENTAL TECHNOLOGY INTEGRATED LAB
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://jochs-sfusd-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1408532468306
- address: 2355 Folsom St.
- city: San Francisco
- state: CA
- zi: 94110
- apprenticeship: N
- id_tp: 2011.0
- notes: Tech 21 internship with SFPUC and JVS wrap around services to take them to Los Medanos for placement testing and enrollment.
- full_address: 2355 Folsom St., San Francisco, CA, 94110
- lat: 37.7595332
- lon: -122.4146285

#### Record: JOHN O'CONNELL HIGH
- record_id: `baywork-training-programs-by-re-row-162`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 162
- source_category: SAN FRANCISCO
- training_institution_ti: JOHN O'CONNELL HIGH
- training_institution_ti: HIGH SCHOOL
- career_path: WATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: ENVIRONMENTAL TECHNOLOGY INTEGRATED LAB
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://jochs-sfusd-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1408532468306
- address: 2355 Folsom St.
- city: San Francisco
- state: CA
- zi: 94110
- apprenticeship: N
- id_tp: 2013.0
- notes: Tech 21 Internship and SFPUC connects them to local 39 and Baywork training map for water and wastewater programs
- full_address: 2355 Folsom St., San Francisco, CA, 94110
- lat: 37.7595332
- lon: -122.4146285

#### Record: JOHN O'CONNELL HIGH
- record_id: `baywork-training-programs-by-re-row-163`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 163
- source_category: SAN FRANCISCO
- training_institution_ti: JOHN O'CONNELL HIGH
- training_institution_ti: HIGH SCHOOL
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: ENVIRONMENTAL TECHNOLOGY INTEGRATED LAB
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://jochs-sfusd-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1408532468306
- address: 2355 Folsom St.
- city: San Francisco
- state: CA
- zi: 94110
- apprenticeship: N
- id_tp: 2012.0
- notes: Tech 21 Internship and SFPUC connects them to local 39 and Baywork training map for water and wastewater programs
- full_address: 2355 Folsom St., San Francisco, CA, 94110
- lat: 37.7595332
- lon: -122.4146285

#### Record: ABRAHAM LINCOLN HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-164`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 164
- source_category: SAN FRANCISCO
- training_institution_ti: ABRAHAM LINCOLN HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ART, ARCHITECTURE, CONSTRUCTION AND ENGINEERING PATHWAY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://alhs-sfusd-ca.schoolloop.com/ace_pathway
- address: 2162 24th Ave.
- city: San Francisco
- state: CA
- zi: 94116
- apprenticeship: N
- id_tp: 2171.0
- full_address: 2162 24th Ave., San Francisco, CA, 94116
- lat: 37.7472812
- lon: -122.4809983

#### Record: SAN FRANCISCO STATE UNIVERSITY
- record_id: `baywork-training-programs-by-re-row-165`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 165
- source_category: SAN FRANCISCO
- training_institution_ti: SAN FRANCISCO STATE UNIVERSITY
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://engineering.sfsu.edu/
- address: 1600 Holloway Avenue
- city: San Francisco
- state: CA
- zi: 94132.0
- apprenticeship: N
- id_tp: 4012.0
- full_address: 1600 Holloway Avenue, San Francisco, CA, 94132
- lat: 37.7227669
- lon: -122.4767213

#### Record: WASHINGTON HIGH SCHOOL
- record_id: `baywork-training-programs-by-re-row-166`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 166
- source_category: SAN FRANCISCO
- training_institution_ti: WASHINGTON HIGH SCHOOL
- training_institution_ti: HIGH SCHOOL
- career_path: MACHINIST/MECHANIC
- training_program_tp_https_baywork_org: AUTOMOTIVE TECHNOLOGY
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: I
- link_to_training_program: http://www.gwhs-sfusd-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1478423337574
- address: 600 - 32nd Ave.
- city: San Francisco
- state: CA
- zi: 94121.0
- apprenticeship: N
- full_address: 600 - 32nd Ave., San Francisco, CA, 94121
- lat: 37.7777914
- lon: -122.4917623

#### Record: INTERNATIONAL UNION OF OPERATING ENGINEERS - LOCAL 39
- record_id: `baywork-training-programs-by-re-row-167`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 167
- source_category: SAN FRANCISCO
- training_institution_ti: INTERNATIONAL UNION OF OPERATING ENGINEERS - LOCAL 39
- training_institution_ti: UNION
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: STATIONARY ENGINEER/WASTEWATER TREATMENT PLANT OPERATOR
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.local39training.org/index.php/mytraining-2/occupational-categories
- address: 337 Valencia St
- city: San Francisco
- state: CA
- zi: 94103.0
- apprenticeship: Y
- id_tp: 5041.0
- full_address: 337 Valencia St, San Francisco, CA, 94103
- lat: 37.7674625
- lon: -122.4218043

#### Record: INTERNATIONAL UNION OF OPERATING ENGINEERS - LOCAL 39
- record_id: `baywork-training-programs-by-re-row-168`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 168
- source_category: SAN FRANCISCO
- training_institution_ti: INTERNATIONAL UNION OF OPERATING ENGINEERS - LOCAL 39
- training_institution_ti: UNION
- career_path: WATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: STATIONARY ENGINEER/WATER TREATMENT PLANT OPERATOR
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: A
- link_to_training_program: http://www.local39training.org/index.php/mytraining-2/occupational-categories
- address: 337 Valencia St
- city: San Francisco
- state: CA
- zi: 94103.0
- apprenticeship: Y
- id_tp: 5042.0
- full_address: 337 Valencia St, San Francisco, CA, 94103
- lat: 37.7674625
- lon: -122.4218043

#### Category / Section: OUT OF THE BAY AREA
- column_4: OUT OF THE BAY AREA

#### Record: SACRAMENTO STATE
- record_id: `baywork-training-programs-by-re-row-170`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 170
- source_category: OUT OF THE BAY AREA
- training_institution_ti: SACRAMENTO STATE
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: ENGINEER
- training_program_tp_https_baywork_org: ENGINEERING PROGRAMS
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: http://www.ecs.csus.edu/
- address: 6000 J Street
- city: Sacramento
- state: CA
- zi: 95819.0
- apprenticeship: N
- id_tp: 4104.0
- full_address: 6000 J Street, Sacramento, CA, 95819
- lat: 38.5671585
- lon: -121.4267032

#### Record: SACRAMENTO STATE
- record_id: `baywork-training-programs-by-re-row-171`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 171
- source_category: OUT OF THE BAY AREA
- training_institution_ti: SACRAMENTO STATE
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: WASTEWATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WATER PROGRAMS: WW T OPERATION SPECIALIST CERTIFICATE
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://www.owp.csus.edu/courses/wastewater-specialist.php
- address: 6000 J Street
- city: Sacramento
- state: CA
- zi: 95819.0
- apprenticeship: N
- id_tp: 4102.0
- full_address: 6000 J Street, Sacramento, CA, 95819
- lat: 38.5671585
- lon: -121.4267032

#### Record: SACRAMENTO STATE
- record_id: `baywork-training-programs-by-re-row-172`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 172
- source_category: OUT OF THE BAY AREA
- training_institution_ti: SACRAMENTO STATE
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: WATER DISTRIBUTION OPERATOR
- training_program_tp_https_baywork_org: WATER PROGRAMS: WATER DISTRIBUTION
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://www.owp.csus.edu/courses/drinking-water/water-distribution-system-operation-and-maintenance.php
- address: 6000 J Street
- city: Sacramento
- state: CA
- zi: 95819.0
- apprenticeship: N
- id_tp: 4103.0
- full_address: 6000 J Street, Sacramento, CA, 95819
- lat: 38.5671585
- lon: -121.4267032

#### Record: SACRAMENTO STATE
- record_id: `baywork-training-programs-by-re-row-173`
- source_file: `Career Training Programs.xlsx`
- source_sheet: `Baywork Training Programs by Re`
- source_row: 173
- source_category: OUT OF THE BAY AREA
- training_institution_ti: SACRAMENTO STATE
- training_institution_ti: FOUR-YEAR UNIVERSITY
- career_path: WATER TREATMENT OPERATOR
- training_program_tp_https_baywork_org: WATER PROGRAMS: W T OPERATION SPECIALIST CERTIFICATE
- code_i_introductory_course_c_classroom_only_a_classroom_ojt_apprenticeship_pd_professional_development_course: C
- link_to_training_program: https://www.owp.csus.edu/courses/water-specialist.php
- address: 6000 J Street
- city: Sacramento
- state: CA
- zi: 95819.0
- apprenticeship: N
- id_tp: 4101.0
- full_address: 6000 J Street, Sacramento, CA, 95819
- lat: 38.5671585
- lon: -121.4267032

---

## Extracted URL Index

- bit.ly/3UUs9La
- bit.ly/3Zj7bIo
- bit.ly/4fxarph
- bit.ly/4g2ZU51
- bit.ly/4hTKBNM
- bit.ly/stthursjune26
- http://ahs.salinasuhsd.org/pages/AlisalHigh
- http://appliedtechnology.santarosa.edu/civil-engineering-technology
- http://appliedtechnology.santarosa.edu/engineering
- http://appliedtechnology.santarosa.edu/waste-water-treatment-technology
- http://appliedtechnology.santarosa.edu/water-treatment-technology
- http://bas.berkeleyschools.net
- http://bhsecho.weebly.com/
- http://bit.ly/3P0VJJ1
- http://bit.ly/3UUs9La
- http://bit.ly/3Zj7bIo
- http://bit.ly/4fxarph
- http://bit.ly/4g2ZU51
- http://bit.ly/4hTKBNM
- http://bit.ly/care
- http://bit.ly/careercenteropps
- http://bit.ly/stthursjune26
- http://bit.ly/swe-prospective
- http://buildingstrength.org/
- http://canadacollege.edu/degrees/?program=ENGR-3AS
- http://careers.chevron.com/professionals/programs
- http://catalog.skylinecollege.edu/current/programs/dance-aa.php
- http://catalog.skylinecollege.edu/current/programs/entrepreneurship-and-small-business-management-ca.php
- http://collegeofsanmateo.edu/cosmetology/
- http://collegeofsanmateo.edu/drafting/
- http://collegeofsanmateo.edu/electrical/
- http://collegeofsanmateo.edu/engineering/
- http://collegeofsanmateo.edu/engineering/degrees.asp
- http://collegeofsanmateo.edu/powersystems/
- http://delmar.cuhsd.org
- http://engineering.berkeley.edu/academics/undergraduate-programs
- http://engineering.sfsu.edu/
- http://engineering.sjsu.edu/programs
- http://engineering.stanford.edu/education/undergraduate-degree-programs
- http://hhh.gavilan.edu/rlee/gavilanengineering.html
- http://ibewyes.org/
- http://ibttech.com/electrician/
- http://jochs-sfusd-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1408532468306
- http://jshs.jsusd.org/academics-06c050b4/rop-cte-7210aa93
- http://livermorehs.schoolloop.com
- http://mdhs.mdusd.org/cms/page_view?d=x&piid=&vpid=1445243121114
- http://missioncollege.edu/depts/hospitality-management/
- http://pacificabeachcoalition.org/contact-us/
- http://paduadiningroom.com/?page_id=24
- http://petalumahighschool.weebly.com
- http://skylinecollege.edu/alliedhealth/
- http://skylinecollege.edu/hospitality/
- http://skylinecollege.edu/journalism/
- http://skylinecollege.edu/music/index.php
- http://smhwc.org/
- http://smuhsd.org/workpermits
- http://soquel.sccs.net/academics/g_m_e_c_academy
- http://svdpsm.org/volunteer/
- http://thebiglift.org/
- http://tinyurl.com/smcinterclimate26
- http://tinyurl.com/smyca
- http://westmont.cuhsd.org
- http://westvalley.edu/
- http://westvalley.edu/academics/applied_arts_sciences/engineering/
- http://whs-pajaro-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1295705505015
- http://wo.esuhsd.org/programs/programs.html
- http://workexperience.santarosa.edu/electrician-apprenticeship
- http://www.bacwwe.org/program-description/course-descriptions/
- http://www.cabrillo.edu/academics/engineering/
- http://www.cabrillo.edu/academics/etech/
- http://www.calapprenticeship.org/
- http://www.ccsf.edu/en/educational-programs/school-and-departments/school-of-science-and-mathematics/engineering-and-technology.html
- http://www.ccsf.edu/en/educational-programs/school-and-departments/school-of-science-and-mathematics/engineering-and-technology/electronics_program.html
- http://www.ccsf.edu/en/educational-programs/school-and-departments/school-of-science-and-mathematics/engineering-and-technology/met---hvac---eng-plumb.html
- http://www.chabotcollege.edu/MTT/
- http://www.chabotcollege.edu/academics/ENGINEERING.asp
- http://www.chabotcollege.edu/apprenticeship/electrical.asp
- http://www.cityofsanmateo.org/index.aspx?NID=927
- http://www.claytonvalley.org/apps/pages/index.jsp?type=d&uREC_ID=193517&pREC_ID=staff
- http://www.claytonvalley.org/apps/pages/index.jsp?type=d&uREC_ID=202178&pREC_ID=438777
- http://www.contracosta.edu/programs-departments/engineering/
- http://www.cv.k12.ca.us/cvhs
- http://www.cvadult.org/courses/career/miscellaneous/item/403-modern-wastewater-treatment-plant-operations-program
- http://www.dublin.k12.ca.us/domain/627
- http://www.dvc.edu/academics/psed/archi-engin/electronics/index.html
- http://www.dvc.edu/academics/psed/archi-engin/engineering/index.html
- http://www.dvc.edu/academics/psed/archi-engin/engineeringtech/index.html
- http://www.ecs.csus.edu/
- http://www.ejatc332.org/
- http://www.evc.edu/
- http://www.evc.edu/academics/divisions-departments/engineering
- http://www.fiveguys.com/Careers
- http://www.foothill.edu/apprenticeships/contacts.php#Electrical
- http://www.foothill.edu/programs/programs.php?rec_id=1205
- http://www.foothill.edu/programs/programs.php?rec_id=1209
- http://www.fremont.k12.ca.us/Page/29112
- http://www.gavilan.edu/water/
- http://www.granadahigh.com
- http://www.gwhs-sfusd-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1478423337574
- http://www.hartnell.edu/engineering
- http://www.hiller.org/join-and-support/volunteer/
- http://www.ibew617.com/
- http://www.jatclu180.org/
- http://www.laney.edu/wp/architecture_engineering/engineering-home/
- http://www.laney.edu/wp/electricity_electronics/
- http://www.laney.edu/wp/industrialmaintenance/
- http://www.laney.edu/wp/machine_technology/
- http://www.laney.edu/wp/machine_technology/machinist-apprenticeship/
- http://www.laspositascollege.edu/engineering/engr-technology.php
- http://www.laspositascollege.edu/engineering/program.php
- http://www.livermorehigh.com/gea
- http://www.local39training.org/index.php/mytraining-2/occupational-categories
- http://www.losmedanos.edu/EETEC/default.asp
- http://www.losmedanos.edu/departments/eng/default.asp
- http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=55
- http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=56
- http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=62
- http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=63
- http://www.marin.edu/Apps/Directory/ProgramProfile.aspx?AcadProgramID=64
- http://www.marinschools.org/ROP/Documents/Agricultural%20Mechanics.pdf
- http://www.marinschools.org/ROP/Documents/Auto%20Technology.pdf
- http://www.marinschools.org/ROP/Documents/Construction%20Technology.pdf
- http://www.marinschools.org/ROP/Documents/Welding%20Occupations.pdf
- http://www.marinschools.org/ROP/Pages/Courses.aspx
- http://www.mathnasium.com/careers
- http://www.metroed.net/SVCTE/svcte-classes/
- http://www.missioncollege.edu/depts/engineer/index.html
- http://www.mvrop.org/Page/652
- http://www.mvrop.org/domain/41
- http://www.napavalley.edu/Academics/SME/Engineering/Pages/default.aspx
- http://www.napavalley.edu/Academics/TechnicalDivision/MACH/Pages/default.aspx
- http://www.nvusd.k12.ca.us/ccr
- http://www.ohlone.edu/instr/engineering/
- http://www.redcross.org/about-us/news-and-events/connect-with-us
- http://www.rejatc.org/?zone=/unionactive/view_page.cfm&page=Apprenticeship20Program
- http://www.rop.santacruz.k12.ca.us/portal/courses/index.php?sector=Building
- http://www.rop.santacruz.k12.ca.us/portal/courses/index.php?sector=Engineering
- http://www.rop.santacruz.k12.ca.us/portal/courses/index.php?sector=Manufacturing
- http://www.rop.santacruz.k12.ca.us/portal/courses/index.php?sector=Transportation
- http://www.sanleandro.k12.ca.us/Page/519
- http://www.santarosa.edu/instruction/itt/machine-tool-technology.php
- http://www.sfelectricaltraining.org/index-apprenticeship.html
- http://www.shfb.org/contact
- http://www.shsgogreen.com/
- http://www.sjcc.edu/academics/departments-divisions/electrician-apprenticeship
- http://www.sjcc.edu/academics/departments-divisions/machine-technology
- http://www.skylinecollege.edu/cosmetology/index.php
- http://www.skylinecollege.edu/electronics/index.php
- http://www.skylinecollege.edu/epicenter/index.php
- http://www.smjatc617.org/apprenticeship.asp
- http://www.solano.edu/degrees/1516/EINGINEER.pdf
- http://www.solano.edu/degrees/1617/water.pdf
- http://www.solano.edu/sciences/water_wastewater_tech.php
- http://www.sonoma.edu/engineering/
- http://www.stmarys-ca.edu/engineering
- http://www.tricountyjatc.org/apprenticeship/
- http://www.tvrop.org/#!energy--utilities/c1g7h
- http://www.tvrop.org/#!engineering--design/c1doq
- http://www.tvrop.org/#!transportation/cnoa
- http://www.ualocal467.org/apprenticeship.aspx
- http://www.wccusd.net/Page/3605
- http://www.wonderdogrescue.org/volunteer
- http://www.woodsidehs.org/?id=432
- https://about.asianart.org/art-speak/
- https://about.bankofamerica.com/en/making-an-impact/student-leaders
- https://acscanemergingleaders.slack.com/files/U09UY9H
- https://acscanemergingleaders.slack.com/files/U09UY9HAPLG/F0A5R2R07R7/img_6108.png
- https://ahs.schoolloop.com/trendhome
- https://alameda.peralta.edu/academic-program/aviation-maintenance-technology/
- https://alaskaair.jobs/
- https://alhs-sfusd-ca.schoolloop.com/ace_pathway
- https://amtac-apprentice.org
- https://anchor.fm/helen-obrien
- https://asianart.org/?_ga=2.143483894.2146903706.1621271242-2125846010.1618845296
- https://au.indeed.com/career-advice/finding-a-job/day-in-the-life-of-photographer
- https://bandzoogle.com/blog/a-day-in-the-life-of-a-full-time-musician
- https://barnesandnoble.dejobs.org/san-bruno-ca/bookseller-pt/287ED25D45224320A369C801C6400D0E/job/
- https://baywork.org/
- https://burlingame.org/465/YAC-Youth-Advisory-Committee
- https://burlingamenetwork.org/
- https://byf.org/explore/construction-careers/
- https://campkeff.org/join-our-team/
- https://canadacollege.edu/engineering/index.php
- https://canadacollege.edu/fashion/
- https://canadacollege.edu/fashion/courses.php
- https://canadacollege.edu/interiordesign/
- https://canadacollege.edu/medicalassisting/
- https://canadacollege.edu/paralegal/
- https://canadacollege.edu/radtech/
- https://careers.bathandbodyworks.com/en/job-2/13504742/bbw-key-holder-the-shops-at-tanforan-san-bruno-ca/
- https://careers.bk.com/search
- https://careers.cinemark.com/search/searchjobs
- https://careers.homedepot.com/?utm_campaign=2017Q1&utm_medium=signage&utm_source=vanityurl%3Fcm_sp%3Dvanity-_-careers-_-JAN17
- https://careers.jamba.com/
- https://careers.linkedin.com/reach
- https://careers.pge.com/content/TDOverview/?locale=en_US
- https://careers.starbucks.com/
- https://careers.united.com/
- https://catalog.canadacollege.edu/current/programs/computer-science-as-t.php
- https://catalog.canadacollege.edu/current/programs/environmental-science-as.php
- https://catalog.canadacollege.edu/current/programs/kinesiology-aa.php
- https://catalog.canadacollege.edu/current/programs/music-aa.php
- https://catalog.collegeofsanmateo.edu/current/courses/kinesiology/
- https://catalog.collegeofsanmateo.edu/current/programs/addiction-studies-aa.php
- https://catalog.collegeofsanmateo.edu/current/programs/apprenticeship-electrical-technology-inside-wireman-as.php
- https://catalog.collegeofsanmateo.edu/current/programs/audio-video-technician-prep-cs.php
- https://catalog.collegeofsanmateo.edu/current/programs/biotechnology-cs.php
- https://catalog.collegeofsanmateo.edu/current/programs/electrical-technology-electrical-power-systems-and-instrumentation-ca.php
- https://catalog.collegeofsanmateo.edu/current/programs/enterprise-cybersecurity-cs.php
- https://catalog.foothill.edu/courses-az/appr/
- https://catalog.skylinecollege.edu/1718/programs/solar-energy-technology-cs.php
- https://catalog.skylinecollege.edu/current/courses/energy-systems-technology-management/
- https://catholiccharitiessf.org/volunteer/
- https://chpmadeformore.com/resources/explorer/
- https://cityofsanmateo.galaxydigital.com/need/
- https://cityofsanmateo.org/DocumentCenter/View/103939/Youth-Commissioner-Application-2026---Updated-033126
- https://collegeofsanmateo.edu/accounting/
- https://collegeofsanmateo.edu/aj/
- https://collegeofsanmateo.edu/architecture/
- https://collegeofsanmateo.edu/articulation/outlines_elec.asp
- https://collegeofsanmateo.edu/biology/
- https://collegeofsanmateo.edu/buildinginspection/
- https://collegeofsanmateo.edu/cis/
- https://collegeofsanmateo.edu/digitalmedia/
- https://collegeofsanmateo.edu/fire/fireacademy.asp
- https://collegeofsanmateo.edu/realestate/
- https://collegeofsanmateo.edu/sloac/slos_course/business-management/index.asp
- https://community.womeninbio.org/admin-portal/email-engine/link/MTMwNzkxMy0zY2VhNjdRRFJDc1U=/23/7ythiG---plus---YVfuP4pqrVjiAvyVkv0r2Ei0MVdRFv4mvDr423BbwTDnbpUFLKnvrZh72TCDzNxaqgL1jkik6XtlmilAnqV54zjWGAKaEESEpMcWSdZvCYCwrmD9456zanHFKdMTYFLbzm1tqB2nniUwkv9SuonIY4ANSInO01NOq---plus---bg---equals---
- https://computerhistory.org/
- https://computerhistory.org/internships/
- https://cseo.ucsf.edu/cure-internship
- https://cseo.ucsf.edu/summer-opportunities
- https://cta.cadienttalent.com/index.jsp?locale=en_US&applicationName=JourneysNonReqExt&seq=locationDetails&deviceMode=desktop&location_id=46175745064
- https://curiodyssey.org/get-involved/volunteer/
- https://docs.google.com/document/d/1-DVGi54-za_BhENJgru_2tFzflyIp4jDQIbamNr7kic/edit#heading=h.18isf3l062tj
- https://docs.google.com/document/d/10RPkMU4SWdj6MhFfhvoU1p5RoFXj3dUIT14LH-Sl79Y/edit
- https://docs.google.com/document/d/10RPkMU4SWdj6MhFfhvoU1p5RoFXj3dUIT14LH-Sl79Y/edit?usp=sharing
- https://docs.google.com/document/d/18oAffZvRpWo-_lJuoua9HiwBPspBnvCvVA4Nx0-6zno/edit
- https://docs.google.com/document/d/1DUyNeScJbPf7iRCR-5hDgFHl334GOTLm7ycS50dOiiE/edit?usp=sharing
- https://docs.google.com/document/d/1VGbp3QUG657CLJmBBUnAVi7RPjzQuBTaYLeClcwSstY/edit?usp=sharing
- https://docs.google.com/document/d/1ifX-J53s7xIjTIJNu5ckgE_Tqvna6u37eFb4dOezxgU/edit?usp=sharing
- https://docs.google.com/forms/d/e/1FAIpQLSc98nMlaA3Lq0z-5lMtGuPxBNDwek9OsLKYbQRcD8gZML2E-g/viewform?usp=dialog
- https://docs.google.com/forms/d/e/1FAIpQLScOpWl74A8QNah0Ws2F2_RlzZF7Xw6trLAkrNiZM4ossBBjXQ/viewform
- https://docs.google.com/forms/d/e/1FAIpQLScP7NZPzjop9vyp_VFFD2ERGngoxFwkbRTElRnACob3x2zd1w/viewform
- https://docs.google.com/forms/d/e/1FAIpQLScuRqa-RqaPfbFYdcS1nlZo84p7EnXRgDpsWdSpuHLODxjZ9w/viewform
- https://docs.google.com/forms/d/e/1FAIpQLSdHvPCMZoC
- https://docs.google.com/forms/d/e/1FAIpQLSf2hRmJ0CdhVc7xFy9RpcJI9QvbEIlaHRHJqYEiTWBBTifdzQ/viewform
- https://docs.google.com/forms/d/e/1FAIpQLSfAfl_4AM1FUSokdWAeSinUZ-Moqr9Ua1wQBN-QxDCIWQoxuw/viewform?sourceid=1015262&emci=e6eb95a0-6fc6-f011-8196-6045bdfe8e9c&emdi=021062bb-75c6-f011-8196-6045bdfe8e9c&ceid=10646981
- https://docs.google.com/forms/d/e/1FAIpQLSfnGjJJrM9XJRALr3fexJT4fzj1QprQhDqeJ3S7cPBNXhiH5g/viewform
- https://docs.google.com/forms/d/e/1FAIpQLSfxFLIuazMQNOXKlpTKfV083C3TiEfqLwNL1rrwFbXmSKJJ-A/viewform
- https://docs.google.com/presentation/d/15W9u0qji7BHPW7YrSpzh-pUZEYKAsoulw22G-VeBNqw/edit?usp=sharing
- https://docs.google.com/presentation/d/1IS9mNlr2i3lLDVCmYCR6KxzgcSXk5S7zOeyDNsudhb4/edit#slide=i
- https://docs.google.com/presentation/d/1IS9mNlr2i3lLDVCmYCR6KxzgcSXk5S7zOeyDNsudhb4/edit?pli=1&slide=id.g1443fafbb89_17_136#slide=id.g1443fafbb89_17_136
- https://docs.google.com/spreadsheets/d/138lPswLJE8eiyqPExnwRdzNnybt9uIlDeNfbbwSc_s0/edit?usp=sharing
- https://docs.google.com/spreadsheets/d/1510_xQKyQd3fngDHxIf74OAJeEkiaaLFuGmQUhPhF9Y/edit?gid=0#gid=0
- https://docs.google.com/spreadsheets/d/1IZYkYcscggsqbl4QFZuvOrxjIa80jTAiupCtPg1dBCA/edit#gid=0
- https://docs.google.com/spreadsheets/d/1IZYkYcscggsqbl4QFZuvOrxjIa80jTAiupCtPg1dBCA/edit#gid=1246146056
- https://docs.google.com/spreadsheets/d/1IZYkYcscggsqbl4QFZuvOrxjIa80jTAiupCtPg1dBCA/edit#gid=211762174
- https://drive.google.com/file/d/13egLpllBkkNQxwiyhjms
- https://drive.google.com/file/d/13egLpllBkkNQxwiyhjmsSP5H0RoX3JIP/view
- https://drive.google.com/file/d/1OeOf_NnEHEpriOWGX-2E_w2fXeyhdMkN/view?usp=sharing
- https://ems.acgov.org/CommtyResources/EMScorps.page
- https://fhweb2.foothill.edu/music/index.html
- https://floristsreview.com/the-day-in-the-life-of-a-studio-florist/
- https://foothill.edu/accounting/
- https://foothill.edu/apprenticeships/trades/ac-refrigeration.html
- https://foothill.edu/apprenticeships/trades/plumbing.html
- https://foothill.edu/apprenticeships/trades/sheet-metal.html
- https://foothill.edu/apprenticeships/trades/steam-pipe.html
- https://foothill.edu/childdevelopment/
- https://foothill.edu/dentalasst/
- https://foothill.edu/dentalhygiene/
- https://foothill.edu/dms/
- https://foothill.edu/gid/
- https://foothill.edu/health/
- https://foothill.edu/hort/
- https://foothill.edu/pharmtech/
- https://foothill.edu/programs/programs.html?title_id=Apprenticeship%20-%20Sound%20and%20Communication
- https://foothill.edu/radtech/
- https://foothill.edu/resptherapy/
- https://foothill.edu/sportsmed/
- https://foothill.edu/vettech/
- https://foothill.edu/workforce/gainful-employment/electrician.html
- https://form.jotformpro.com/41496005892964
- https://forms.gle/ESvPdGAQLb979Yxz9
- https://forms.gle/JcNoM4GqKCJ7Bt3Z8
- https://forms.gle/Pws4oHTynq4ShtSK7
- https://forms.gle/rVfk6q2K4WhpsqzK6
- https://forms.gle/zTdHzrzPMu3pCHhU6
- https://forms.office.com/Pages/ResponsePage.aspx?id=CBcP12OKdk-3fVvCFueV9SQLNHYIHANMmz97o-qy025UOUw1NExESUFHQlpHWlNTMTI2WFkxVTUzWiQlQCNjPTEkJUAjdD1n
- https://galileo-camps.com/jobs/program-staff/?_ga=2.17590585.1888397547.1612724013-1592259099.1602870707
- https://girlswhocode.com/
- https://girlswhocode.my.salesforce-sites.com/GWCEnrollment/apex/ERx_Forms__PageMaker?pageId=Welcome
- https://globalhealthsciences.ucsf.edu/education/global-reach/summer-researchers-global-health
- https://gogaregistration.tfaforms.net/120?_gl=1*1usiy04*_gcl_au*ODMyNzg3NTc1LjE3MzE5NzUyMDg.*_ga*MjczNDYzNDk2LjE2NTUxNTY3MjI.*_ga_D50S6PV0QJ*MTczNzc2MTI0Ni42NC4xLjE3Mzc3NjIyNDIuMC4wLjA.
- https://gotrbayarea-dot-yamm-track.appspot.com/2irR6ItKtB9vXXdOxbgjpFyj81it8-44DkyGZThQ0uVVj6nuongGu_iyswljNVOGGF-WuXgt9-nommt87SB2ydvijiKL7QASubFoWXwm1WbBiX7iVowtrZyeM_H1BLBujfChXdjXjGxZeL66gcjzZBvM3xKWBgXESxgbxlHue2_YQ-zCWdemcsOAqVy7j3e9ueeVrwA
- https://habitatgsf.org/volunteer/
- https://hiller.formstack.com/forms/flight_teen_volunteer_application
- https://ihs.schoolloop.com/AcademiesPrograms
- https://intern.nasa.gov/
- https://intern.nasa.gov/ossi/web/students/login/
- https://jobs.chipotle.com/search-jobs
- https://jobs.cvshealth.com/job-search-results/?location=San%20Bruno%2C%20CA%2C%20USA&latitude=37.6304904&longitude=-122.4110835&radius=10
- https://jobs.sephora.com/viewalljobs/250/?locale=en_US
- https://jobs.smcgov.org/
- https://jobs.target.com//
- https://kplaunch.kaiserpermanente.org/
- https://laney.edu/architecture/
- https://laney.edu/cis/
- https://laney.edu/construction_management/
- https://laney.edu/cosmetology/
- https://laney.edu/cte/carpentry
- https://laney.edu/cte/electrical-and-electronics-technology
- https://laney.edu/ect/
- https://laney.edu/engineering/
- https://laney.edu/machine_technology/
- https://laney.edu/media/
- https://laney.edu/photography/
- https://laney.edu/welding/
- https://laney.edu/woodtechnology/
- https://mapsforsuccess.laney.edu/academics/interest-clusters/dc0a1f47-0183-47c0-938c-9ddb1ef5d6ce/programs/2e90cb73-1d36-7f69-279b-75bc09e46d92
- https://mapsforsuccess.laney.edu/academics/interest-clusters/dc0a1f47-0183-47c0-938c-9ddb1ef5d6ce/programs/a9be20ec-8d33-9572-b815-4e26cb5ddb10
- https://med.stanford.edu/genecamp/process
- https://med.stanford.edu/odme/high-school-students/smysp.html
- https://med.stanford.edu/pediatrics/education/pediatrics-internship-program.html
- https://med.stanford.edu/pediatrics/education/pediatrics-internship-program/application.html
- https://media.wix.com/ugd/7d780b_bb4b22d8f1e84c74866f7b5043668e08.pdf
- https://mission.elumenapp.com/catalog/24-25/program/public-transit-coach-operator-ca-2023fa
- https://mission.elumenapp.com/catalog/24-25/program/public-transit-leadership-ca-2023fa
- https://mission.elumenapp.com/catalog/24-25/program/public-transit-service-mechanic-apprenticeship-ca-2023fa
- https://missioncollege.edu/
- https://missioncollege.edu/depts/health-occupations-nursing/
- https://momsagainstpoverty.org/volunteer/
- https://momsagainstpoverty.org/who-we-are/contact-us/
- https://mtc.ca.gov/jobs-contracts/job-opportunities/internships/high-school-internships
- https://my.reviewr.com/s2/site/YWIBAmbassador2026
- https://nationalacademyofathletics.com/
- https://ninelivesfoundation.org/get-involved/#volunteer
- https://nothing-bundt-cakes-careers.careerplug.com/jobs/?location=0084&fulfillment=5/21/2024
- https://nowhiring.com/ikescareers/?start=0&rad=1000&sort=distance&view=list&location=san%20mateo#job-results
- https://oldwp.laney.edu/graphic_arts/
- https://open.spotify.com/episode/07MDaui25IGTCP1588bb3e
- https://open.spotify.com/episode/0Er2MpL1vOAzEIxfcTS25x
- https://open.spotify.com/episode/0vHzJv2uQZQbIdISRyjMzE
- https://open.spotify.com/episode/26ZpyB5UK7GZsxiwEJFz8C?si=cB-QOFhmQx-VpZyb64WBOQ
- https://open.spotify.com/episode/2S15OPZf1q72OIgEMbdpMd
- https://open.spotify.com/episode/2etKWo5LSpDVzcAlzXZLpD
- https://open.spotify.com/episode/2uYylhr7DTMtYMKFaEiekI
- https://open.spotify.com/episode/53dw2InVZAhZv3Rd5c3Wbk
- https://open.spotify.com/episode/5R8lwJoiTVQ0DGoyr09KUa
- https://open.spotify.com/episode/5VVsONFn9ppXSoUb026fzN
- https://open.spotify.com/episode/5aPMoJDEqg5mAv314QmWSb?si=2Jm2VCX7RBmmyuZex_IxEw
- https://open.spotify.com/episode/5n3zzCh2Nty62tNBZeHwfi
- https://open.spotify.com/episode/5sp5AFgy9X48GRyk9BCQvw
- https://open.spotify.com/episode/5w1xfMKJ8E1nA2Vac4EFb7
- https://open.spotify.com/episode/64d7D5T5pseUubZ11ICeV5
- https://open.spotify.com/episode/67nlMXnrda12TIJoVcHeu3
- https://open.spotify.com/episode/6O9kVmbgbTJp2ff4tEQ3aZ
- https://open.spotify.com/episode/7FnG4mA77t0aCgfvkkIIKE
- https://open.spotify.com/episode/7zkiYk8AG8PZREeN5q4Kld
- https://open.spotify.com/show/2vSnBmD2VEGBt6gVMdLSOU
- https://owhstudios.tv/
- https://peninsulafamilyservice.org/get-involved/become-a-volunteer/
- https://peninsulafoodrunners.org/become-a-volunteer/
- https://phs-spca.org/volunteer/positions/junior/
- https://podcasts.apple.com/us/podcast/talkshop-podcast/id1520403617
- https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8yODQxNTA4Yy9wb2RjYXN0L3Jzcw==
- https://recruiting.paylocity.com/Recruiting/Jobs/Details/534818
- https://sage.slac.stanford.edu/
- https://sage.slac.stanford.edu/student-guide
- https://saltandstraw.com/pages/careers
- https://samaritanhousesanmateo.org/volunteer/
- https://sanmateoadulted.org/programs/career-education/clinical-medical-assistant/
- https://sanmateoadulted.org/programs/career-education/pharmacy-technician-training-program/
- https://sanmateoadulted.org/programs/career-education/professional-communications/
- https://scu.az1.qualtrics.com/jfe/form/SV_6fohRhLV1Td8j7E
- https://secure.acsevents.org/site/SPageServer;jsessionid=00000000.app333b?pagename=relay_get_involved&NONCE_TOKEN=3DAA094F756C512D8AD12833EA5887DB
- https://secure.qgiv.com/for/jthe/
- https://sfbuildingtrades.org/
- https://sfdhr.org/apprenticeshipsf-programs
- https://shop.dancetheatreshop.com/
- https://simr.stanford.edu/
- https://simr.stanford.edu/application.html
- https://sites.google.com/a/musd.org/etechacademy/home
- https://skylinecollege.edu/biotechnology/
- https://skylinecollege.edu/digitalmedia/
- https://skylinecollege.edu/emt/
- https://skylinecollege.edu/respiratorycare/
- https://skylinecollege.edu/sterileprocessing/
- https://skylinecollege.edu/surgicaltechnology/
- https://slzhs.schoolloop.com/cms/nothing?d=x&group_id=1251955275360
- https://smc.surfrider.org/volunteer
- https://smcuca.org/tip-san-mateo
- https://smhwc.org/volunteer
- https://smw104training.org/program-information/
- https://spiritedplaylabs.com/spl-careers/
- https://ssrp.slideroom.com/
- https://sss.academyart.edu/psc/SSS/EMPLOYEE/SA/c/CY2_LOGIN_MENU.CY2_LOGIN_FL.GBL&cmd=start?CAMPUS_URL=https%3a%2f%2fsss.academyart.edu%2fpsp%2fSSS%2fEMPLOYEE%2fSA%2fs%2fWEBLIB_SCC_NUR.SCC_SS_GATEKEEPER.FieldFormula.IScript_SCC_GateKeeper%3fSCC_APPL_CONTXT_ID%3dSCC_NURCTXT_20220418211926&comm_key_4=PURE&universal_lead_id=0741CAE4-CD31-C33C-3642-9DB6419B0008&referrer_url=https%3A%2F%2Fwww.academyart.edu%2Facademics%2Fpre-college%2F&
- https://stanfordodme.slideroom.com/
- https://stanfordodme.slideroom.com/#/login/program/81488
- https://stemgateway.nasa.gov/public/s/explore-opportunities
- https://sustainability.stanford.edu/admissions-education/k-12-outreach/young-investigators
- https://sustainability.stanford.edu/admissions-education/k-12-outreach/young-investigators/faqs
- https://talkshoppodcast.com/
- https://teensvolunteer.org/volunteer-opportunities/?fwp_location=virtual
- https://thecareyschool.bamboohr.com/careers/68
- https://themathworkshop.us/contact-us/
- https://therapystores.com/pages/careers
- https://tradeswomen.org/get-started/
- https://ua.soe.ucsc.edu/programs
- https://ucsf.co1.qualtrics.com/jfe/form/SV_7PUzz6yz9HpyFF4
- https://vhs-vcusd-ca.schoolloop.com/cms/page_view?d=x&piid=&vpid=1408076049631
- https://volunteers.uso.org/?nd=vms_public_form&form_id=59&_ga=2.61825324.1622696422.1611345685-1585989722.1611345685
- https://w2.csun.edu/academics/majors-and-programs/radiologic-sciences-major
- https://water.ca.gov/About/Careers/Apprentice-Program?fbclid=IwAR0kwFB27FsgpgrWUx2FlvICkiUVjcP3FMNtIcIE9Jhov5BZOj-Bxt86UcA
- https://www.acscanemergingleaders.org/about
- https://www.airforce.com/
- https://www.airforce.com/what-to-expect/life-in-the-air-force
- https://www.bart.gov/about/jobs
- https://www.bestbuddies.org/volunteer/
- https://www.bgcp.org/
- https://www.bgcp.org/volunteer
- https://www.bnap.com/contact-us
- https://www.burlingame.org/1192/Homework-Help-Mentors
- https://www.calacademy.org/volunteering-at-the-academy
- https://www.californiacolleges.edu/#/
- https://www.calmachinist.com/index.php?p=pages&id=13https://www.calmachinist.com/index.php?p=apprentice&id=3
- https://www.calopps.org/city-of-millbrae
- https://www.calopps.org/san-mateo/job-20697172
- https://www.canadacollege.edu/digitalartanimation/index.php
- https://www.canadacollege.edu/earlychildhoodeducation/
- https://www.canva.com/design/DAG-gxpDvHE/izXpdW6leXm4Mq4EwgDeFA/view?utm_content=DAG-gxpDvHE&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h564d446af8
- https://www.canva.com/design/DAG-hLy3TbU/szDMtEutTACwlKItMv6SwQ/view?utm_content=DAG-hLy3TbU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd19e1255d8
- https://www.canva.com/design/DAG74fZCR9I/ElK7WItM2j0-8OohYUC1PQ/view?utm_content=DAG74fZCR9I&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha69be26bce
- https://www.ccsf.edu/academics/ccsf-catalog/courses-by-department/computer-science
- https://www.ccsf.edu/academics/schools/business-fashion-hospitality/fashion-department
- https://www.ccsf.edu/academics/schools/school-fine-applied-communication-arts/bema
- https://www.ccsf.edu/academics/schools/school-fine-applied-communication-arts/photography-department
- https://www.ccsf.edu/academics/schools/school-fine-applied-communication-arts/visual-media-design-department
- https://www.ccsf.edu/ccsf-academics/career-education/automotive-pre-apprenticeship
- https://www.ccsf.edu/degrees-certificates/addiction-recovery-counseling
- https://www.ccsf.edu/degrees-certificates/automotive-technology
- https://www.ccsf.edu/degrees-certificates/community-health-worker
- https://www.ccsf.edu/degrees-certificates/community-mental-health-worker
- https://www.ccsf.edu/degrees-certificates/computer-aided-design
- https://www.ccsf.edu/degrees-certificates/computer-networking-and-information-technology
- https://www.ccsf.edu/degrees-certificates/construction-technology
- https://www.ccsf.edu/degrees-certificates/ecg-technician
- https://www.ccsf.edu/degrees-certificates/education-and-child-development
- https://www.ccsf.edu/degrees-certificates/emergency-medical-technician-emt
- https://www.ccsf.edu/degrees-certificates/environmental-horticulture
- https://www.ccsf.edu/degrees-certificates/floristry
- https://www.ccsf.edu/degrees-certificates/health-information-technology
- https://www.ccsf.edu/degrees-certificates/healthcare-interpreter
- https://www.ccsf.edu/degrees-certificates/interior-design
- https://www.ccsf.edu/degrees-certificates/library-information-technology
- https://www.ccsf.edu/degrees-certificates/manufacturing
- https://www.ccsf.edu/degrees-certificates/medical-assisting
- https://www.ccsf.edu/degrees-certificates/met-hvac-plumbing
- https://www.ccsf.edu/degrees-certificates/music
- https://www.ccsf.edu/degrees-certificates/nutrition
- https://www.ccsf.edu/degrees-certificates/pharmacy-technician
- https://www.ccsf.edu/degrees-certificates/phlebotomy-technician
- https://www.ccsf.edu/degrees-certificates/unit-coordinator
- https://www.ccsf.edu/node/160236
- https://www.ccsf.edu/taxonomy/term/51781
- https://www.cctc.edu/
- https://www.cfsfire.org/community-outreach/fire-explorer-post/
- https://www.chp.ca.gov/chp-careers/explorer/explorer-training
- https://www.chp.ca.gov/home
- https://www.cinepolisusa.com/careers/
- https://www.cityofsanmateo.org/132/Human-Resources
- https://www.cityofsanmateo.org/273/Police
- https://www.cityofsanmateo.org/2813/Cadet-Program
- https://www.cityofsanmateo.org/2813/Police-Explorer-Program
- https://www.cityofsanmateo.org/4221/Summer-Jobs
- https://www.cityofsanmateo.org/FormCenter/Police-Department-4/Join-SMPD-Recruitment-Interest-Form-76
- https://www.closethegapfoundation.org/
- https://www.closethegapfoundation.org/program/fellowship-2026
- https://www.coastal.ca.gov/publiced/cleanups.html
- https://www.covenanthouse.org/about-homeless-charity/contact
- https://www.covenanthouse.org/take-action/become-volunteer
- https://www.csum.edu/web/academics/departments-schools
- https://www.cwea.org/et.shtml
- https://www.deanza.edu/career-training/graphic-design.html
- https://www.deanza.edu/career-training/photography.html
- https://www.deanza.edu/counseling/pdf/degrees/design_manufacturing.pdf
- https://www.deanza.edu/ftv/degrees-certificates.html
- https://www.deanza.edu/manufacturing/
- https://www.deanza.edu/paralegal/
- https://www.deltacollege.edu/program/diesel-technology
- https://www.dontdrivedirty.com/jobs/
- https://www.dpr.com/
- https://www.dpr.com/build-up-high-school-internship
- https://www.eaa.org/eaa/youth/free-ye-flights
- https://www.eaa20.org/join-chapter-20.html
- https://www.edjoin.org/Home/JobPosting/1928081
- https://www.exploratorium.edu/
- https://www.exploratorium.edu/about/explainers/high-school
- https://www.facebook.com/TalkShopPodcast-105534581166487/
- https://www.flysfo.com/about-sfo/careers/volunteering
- https://www.flysfo.com/careers
- https://www.foothill.edu/ems/
- https://www.foothill.edu/ems/paramedic/
- https://www.gapinc.com/en-us/careers/job-search?brand=Old%20Navy&currentPage=1&sort=geodistance&lat=37.5629917&long=-122.3255254&location=San%20Mateo,%20California
- https://www.gapinc.com/en-us/jobs/34/70/brand-associate-hillsdale
- https://www.gapinc.com/en-us/jobs/34/84/brand-associate-hillsdale
- https://www.gapinc.com/en-us/jobs/35/40/brand-associate-burlingame-ave?rx_campaign=indeed0&rx_group=116953&rx_job=354062&rx_r=none&rx_source=Indeed&rx_ts=20210414T175059Z&src=JB-10324
- https://www.glide.org/contactus
- https://www.glide.org/volunteer/
- https://www.goarmy.com/
- https://www.goarmy.com/army-life/intro-to-army-life/daily-routine
- https://www.gotrbayarea.org/coach
- https://www.gotrbayarea.org/junior-coach
- https://www.governmentjobs.com/careers/sanmateo/jobs/5227125/san-mateo-county-libraries-big-lift-inspiring-summers-learning-facilitator
- https://www.governmentjobs.com/careers/sanmateo/jobs/n
- https://www.governmentjobs.com/careers/sanmateo/jobs/newprint/5323353
- https://www.grassrootsecology.org/volunteer/
- https://www.gsnorcal.org/en/for-volunteers/troops.html
- https://www.humanmade.org/
- https://www.in-n-out.com/employment
- https://www.indeed.com/career-advice/interviewing/what-to-wear-to-an-interview-teenager
- https://www.instagram.com/TalkShop.Podcast/
- https://www.jfcs.org/find-help/youth/internships/summer-internship-program/
- https://www.jobapscloud.com/SF/
- https://www.jobapscloud.com/SF/specs/classspecdisplay.asp?ClassNumber=3410
- https://www.jobapscloud.com/SF/specs/classspecdisplay.asp?ClassNumber=7383
- https://www.jobcorps.gov/train
- https://www.jobs-ups.com/
- https://www.jobtrainworks.org/cna/
- https://www.joinfiveguys.com/job/crew-member-food-service-us-ca-san-bruno-1150-el-camino-real-6163903-4199/
- https://www.jvs.org/automotive/?mc_cid=ac80a5ae9b&mc_eid=7fa87c5562
- https://www.kaiserpermanentejobs.org/
- https://www.legarzasports.org/summer-jobs/
- https://www.lifemoves.org/ways-to-give/volunteering/
- https://www.marines.com/
- https://www.marines.com/life-as-a-marine/life-in-the-marine-corps.html
- https://www.mathnasium.com/fostercity/employment
- https://www.mathnasium.com/laurelwood/employment
- https://www.missioncollege.edu/student_services/job-placement-internship-center/apprenticeships.html
- https://www.nationalguard.com/
- https://www.navy.mil/
- https://www.ncpjatc.org/
- https://www.nickthegreek.com/
- https://www.npower.org/
- https://www.oaklandzoo.org/
- https://www.oaklandzoo.org/programs-and-events/teen-assistants-t-a
- https://www.oaklandzoo.org/programs-and-events/teen-summer-internships
- https://www.occ-usa.org/
- https://www.owp.csus.edu/courses/drinking-water/water-distribution-system-operation-and-maintenance.php
- https://www.owp.csus.edu/courses/wastewater-specialist.php
- https://www.owp.csus.edu/courses/water-specialist.php
- https://www.pacificbeachcoalition.org/street-to-beach-cleanups-volunteer-earth-hero-needed/
- https://www.pacificbeachcoalition.org/student/
- https://www.pahgcc.com/
- https://www.paletteteagarden.com/
- https://www.parksconservancy.org/
- https://www.parksconservancy.org/programs/linc-summer-high-school-program
- https://www.parksconservancy.org/volunteer/weekly-volunteer-programs
- https://www.peets.com/pages/careers
- https://www.peninsulahumanesociety.org/about/contact.html
- https://www.petersoncat.com/about-us/thinkbig,
- https://www.projectglimmer.org/volunteers
- https://www.pumpitupparty.com/
- https://www.redcross.org/local/california/northern-california-coastal/volunteer/youth-volunteers.html
- https://www.redcrossblood.org/
- https://www.rocketdogrescue.org/contact/
- https://www.rocketdogrescue.org/volunteer-2/about-volunteering/
- https://www.roundtablepizza.com/careers?_ga=2.135303473.1055772319.1632169451-921284157.1632169451
- https://www.safarirun.com/index/employment
- https://www.scu.edu/
- https://www.scu.edu/engineering/
- https://www.scu.edu/engineering/beyond-the-classroom/outreach/summer-engineering-seminar-ses/
- https://www.scu.edu/engineering/beyond-the-classroom/outreach/virtual-engineering-seminar-ves/
- https://www.seahugger.org/programs-home
- https://www.sfmfoodbank.org/volunteer/
- https://www.sfzoo.org/volunteer-programs/#teenvolunteers
- https://www.shfb.org/give-help/volunteer/
- https://www.shfb.org/give-help/volunteer/volcalendar-general/?
- https://www.signupgenius.com/go/10c0f4ea9a729a7fd0-harvest#/
- https://www.signupgenius.com/go/30E0A
- https://www.signupgenius.com/go/30E0A48AEA62CAAF85-64178108-2026#/
- https://www.signupgenius.com/go/60b0b49abaa23a4f94-indays
- https://www.skagit.edu/academics/areas-of-study/industrial-technology-transportation/marine-maintenance-technology/
- https://www.smcfire.org/
- https://www.smcgov.org/ceo/youth-commission
- https://www.smchealth.org/smmc-careers
- https://www.smchealth.org/smmc-volunteer
- https://www.smcoe.org/
- https://www.smcoe.org/for-families/attending-outdoor-education/cabin-leaders.html#:~:text=What%20Is%20a%20Cabin%20Leader,demanding%20and%20very%20rewarding%20task.
- https://www.smcoe.org/for-families/environmental-literacy/
- https://www.smcsheriff.com/community-activities
- https://www.smcsheriff.com/join-our-team
- https://www.smcsustainability.org/climate-change/youth-programs/youth-climate-ambassador/
- https://www.smuhsd.org/Page/12073
- https://www.smuhsd.org/Page/3561
- https://www.smuhsd.org/students/student-support-and-information/work-permits
- https://www.spauldingcenter.org/boatworks-101-apprenticeship
- https://www.stanthonysf.org/volunteer/
- https://www.stridesforlife.org/youth-impact
- https://www.sutrostewards.org/get_involved
- https://www.sutterhealth.org/volunteering/opportunities/youth-volunteer-at-mills-peninsula-medical-center-1096205778
- https://www.svyouthclimateaction.org/
- https://www.swimlpb.com/career-opportun
- https://www.swimlpb.com/career-opportunities
- https://www.teamintraining.org/about/contact-information
- https://www.tesla.com/careers/tesla-start
- https://www.thepgcc.org/contact-us/employment
- https://www.upwindscholarship.com/applications/
- https://www.uscg.mil/
- https://www.uso.org/contact
- https://www.uso.org/take-action/volunteer
- https://www.workatht.com/job-description/?stores=true&id=a8d5d3ed-4115-47b1-82ce-3744a8fe1de0
- https://www.worldmarketcorp.com/careers/
- https://www.ymcasf.org/get-involved/volunteer?field_location_reference_multi_target_id%5B%5D=454
- https://www.ymcasf.org/get-involved/volunteer?field_location_reference_multi_target_id[]=454
- https://www.youtube.com/watch?v=0mcTtVmU__E
- https://www.youtube.com/watch?v=22xj2StvhWU
- https://www.youtube.com/watch?v=7HrMcd-ODj0
- https://www.youtube.com/watch?v=Abi56urip1M
- https://www.youtube.com/watch?v=CuDwydMjgGg
- https://www.youtube.com/watch?v=D6mUqcsmu_I
- https://www.youtube.com/watch?v=DDFEfS4Ajt0
- https://www.youtube.com/watch?v=Dod9igHR2rM
- https://www.youtube.com/watch?v=EpBQnapmHLU
- https://www.youtube.com/watch?v=FB2bEd9ueU0
- https://www.youtube.com/watch?v=GES7sififhc
- https://www.youtube.com/watch?v=HEQPEjzi56c
- https://www.youtube.com/watch?v=HP7bfHNdYqg
- https://www.youtube.com/watch?v=JrdTkpfA2UQ
- https://www.youtube.com/watch?v=Kd0vC3beboo
- https://www.youtube.com/watch?v=NraKEGduHJ4
- https://www.youtube.com/watch?v=P-KIO4z_m0E
- https://www.youtube.com/watch?v=SkSKh1L00Zc
- https://www.youtube.com/watch?v=VnNvQvect-U
- https://www.youtube.com/watch?v=adLC8EOXnq0
- https://www.youtube.com/watch?v=bRaLFYCLmNM
- https://www.youtube.com/watch?v=c1eCPy5riko
- https://www.youtube.com/watch?v=eoBnWBIQgtU
- https://www.youtube.com/watch?v=k0k6tWrISBM
- https://www.youtube.com/watch?v=lifunadBZ3U
- https://www.youtube.com/watch?v=pJBk_33JvbM
- https://youtu.be/0s7aNW60kmU
- https://youtu.be/IMaaYcvGpCo?feature=shared
- https://youtu.be/J3rEqwZjZIw?feature=shared
- https://youtu.be/XQjPaqy8YRM
- tinyurl.com/smcinterclimate26
- tinyurl.com/smyca

## Extracted Email Index

- Chermann@smuhsd.org
- Info@sanmateoarboretum.org
- InternCoordinator@bayareametro.gov
- Jobs@LegarzaSports.org
- Qhua@smuhsd.org
- Shaghasi@gmail.com
- Themathworkshop@gmail.com
- acscancaliforniasel.outreach@gmail.com
- balonso@smcgov.org
- bethany@age-up.org
- california@bestbuddies.org
- careers@mathnasiumworks.com
- chermann@smuhsd.org
- communications@smc.surfrider.org
- czografos@smuhsd.org
- dancetheatreshop@gmail.com
- hfletcher@pahgcc.net
- hschang@smuhsd.org
- info@buildingstrength.org
- info@girlscoutsnorcal.org
- info@grassrootsecology.org
- info@midpenbgc.org
- info@peninsulafamilyservice.org
- info@sfmfoodbank.org
- info@theneighborhoodnetwork.org
- info@wonderdogrescue.org
- joinsmpd@cityofsanmateo.org
- jreyes@smuhsd.org
- kathryn.breaux@gmail.com
- kkoivisto@smuhsd.org
- lcauble@CuriOdyssey.org
- lhockaday@smuhsd.org
- mkaplan@burlingame.org
- nkane@smuhsd.org
- odelgadillo@smhwc.org
- paduadiningroom@gmail.com
- programs@gotrbayarea.org
- racquel@kecamps.com
- ref-team@ayso.org
- roldham@smhwc.org
- sbliss@burlingame.org
- smcsosarpost830@gmail.com
- tle@smfc.k12.ca.us
- volunteer@catholiccharitiessf.org
- volunteer@lifemoves.org
- volunteer@parksconservancy.org
- volunteer@sfjazz.org