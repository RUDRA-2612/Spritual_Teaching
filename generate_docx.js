const fs = require('fs');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  ShadingType,
  convertInchesToTwip
} = require('docx');

function createDoc() {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            size: 23, // 11.5 pt
            color: '2D3748'
          },
          paragraph: {
            spacing: {
              after: 120,
              line: 276
            }
          }
        }
      }
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(1),
              right: convertInchesToTwip(1),
              bottom: convertInchesToTwip(1),
              left: convertInchesToTwip(1)
            }
          }
        },
        children: [
          // Document Header / Title
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 },
            children: [
              new TextRun({
                text: 'UNIVERSAL SPIRITUAL ACADEMY',
                bold: true,
                size: 38, // 19pt
                color: '1A365D'
              })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            children: [
              new TextRun({
                text: 'Comprehensive Project Master Plan & System Architecture',
                italics: true,
                size: 24, // 12pt
                color: '4A5568'
              })
            ]
          }),

          // Metadata Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            margins: { top: 100, bottom: 100, left: 150, right: 150 },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'EDF2F7' },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Project Type: ', bold: true }),
                          new TextRun('Dual-Portal Web Platform (Student & Parent)')
                        ]
                      })
                    ]
                  }),
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'EDF2F7' },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Target Audience: ', bold: true }),
                          new TextRun('Children (Ages 5-15) & Parents')
                        ]
                      })
                    ]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'F7FAFC' },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Core Subject: ', bold: true }),
                          new TextRun('Multi-Faith Moral Teachings & World Religions')
                        ]
                      })
                    ]
                  }),
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'F7FAFC' },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'Version: ', bold: true }),
                          new TextRun('1.0 (MVP Specification)')
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          new Paragraph({ spacing: { after: 200 }, children: [] }),

          // Executive Summary & Vision
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [
              new TextRun({
                text: '1. Executive Summary & Vision',
                bold: true,
                color: '1A365D',
                size: 28
              })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Vision: ',
                bold: true
              }),
              new TextRun(
                'Universal Spiritual Academy is an engaging, child-friendly moral education platform designed to introduce children to universal ethics and values (Kindness, Compassion, Honesty, Respect, Forgiveness, and Selfless Service) found across major world religions. It combines gamified multimedia learning for children with a data-rich monitoring portal for parents.'
              )
            ]
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Major Religions Covered in Curriculum: ',
                bold: true
              }),
              new TextRun(
                'Hinduism (Sanatana Dharma), Buddhism, Christianity, Islam, Sikhism, Jainism, and Judaism. Each tradition is presented with equal respect, focusing on uplifting human values rather than dogma.'
              )
            ]
          }),

          // System Architecture Flow
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200 },
            children: [
              new TextRun({
                text: '2. System Flow & Architecture',
                bold: true,
                color: '1A365D',
                size: 28
              })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun(
                'The platform operates on a single website with an instant role-switch mechanism between two dedicated experiences:'
              )
            ]
          }),

          // ASCII Flowchart inside a box
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    shading: { type: ShadingType.CLEAR, fill: 'F7FAFC' },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: '                      [ WEBSITE ENTRY / LOGIN ]\n                                  |\n                 +----------------+----------------+\n                 |                                 |\n                 v                                 v\n       [ STUDENT PORTAL ]                  [ PARENT PORTAL ]\n                 |                                 |\n     (Screen 1: All Religions)         (Screen 1: All Religions Overview)\n                 |                                 |\n                 v (Select Religion)               v (Select Religion)\n    (Screen 2: Learning & Exam Hub)   (Screen 2: Child Progress Dashboard)\n      • 🎬 Video Lectures               • 🎥 Lecture Attendance Tracking\n      • 📚 Moral Storybooks & Audio      • 📊 Weekly Study Hours & Streaks\n      • 💡 Core Teachings & Flipcards    • 🏆 Exam Scorecard & Certificates\n      • 🧘 Mindful Calm & Breathing      • 💬 Family Discussion Prompts\n      • 📝 Assessment & Final Exams',
                            font: 'Courier New',
                            size: 19
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          // Section 3: Dual Portal System
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200 },
            children: [
              new TextRun({
                text: '3. Dual Portal System',
                bold: true,
                color: '1A365D',
                size: 28
              })
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Student Mode: ', bold: true }),
              new TextRun(
                'Vibrant, gamified, and interactive user interface tailored specifically for kids to foster excitement and curiosity without cognitive overload.'
              )
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Parent Mode: ', bold: true }),
              new TextRun(
                'Clean, analytical dashboard designed for parents to oversee course completion, monitor weekly attendance, evaluate test performance, and discuss morals with their kids.'
              )
            ]
          }),

          // Section 4: Student Portal Breakdown
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200 },
            children: [
              new TextRun({
                text: '4. Student Portal: Screen-by-Screen Breakdown',
                bold: true,
                color: '1A365D',
                size: 28
              })
            ]
          }),

          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({ text: 'Screen 1: Home Page (World Religions Showcase)', bold: true, color: '2B6CB0', size: 24 })
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Hero Section: ', bold: true }),
              new TextRun('Warm welcoming greeting, daily thought of the day, and a "Resume Learning" button.')
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Interactive Religion Grid: ', bold: true }),
              new TextRun(
                'Visual cards featuring sacred symbols, theme colors, and progress bars for all 7 major religions (Hinduism, Buddhism, Christianity, Islam, Sikhism, Jainism, and Judaism).'
              )
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Gamification Stats: ', bold: true }),
              new TextRun('Total Virtue Stars (⭐), active study streak counter (🔥), and digital achievement badges.')
            ]
          }),

          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 120 },
            children: [
              new TextRun({ text: 'Screen 2: Dedicated Religion Learning Hub', bold: true, color: '2B6CB0', size: 24 })
            ]
          }),
          new Paragraph({
            children: [
              new TextRun(
                'When a student clicks on a religion, a dedicated learning hub opens with 5 distinct educational modules:'
              )
            ]
          }),

          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: '1. 🎬 Video Lectures (Animated Explainer Series): ', bold: true }),
              new TextRun(
                'Engaging 3–5 minute animated video lessons explaining historical background, great masters, and ethical teachings. Features pause/play, speed control, and automatic attendance marking upon 90% completion.'
              )
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: '2. 📚 Moral Storybooks (Read & Listen): ', bold: true }),
              new TextRun(
                'Illustrated flipbook stories with step-by-step reading. Includes soothing professional audio narration with ambient music for bedtime listening, ending with a clear "Moral Takeaway" summary.'
              )
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: '3. 💡 Core Teachings & Flipcards: ', bold: true }),
              new TextRun(
                'Interactive cards displaying key principles on the front and relatable real-world examples for kids on the back. Includes an interactive Sacred Symbol Explorer explaining spiritual meanings.'
              )
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: '4. 🧘 Mindful Calm & Sound Zone: ', bold: true }),
              new TextRun(
                'A 2-minute visual guided breathing exercise (inhale/exhale bubble) paired with calming authentic sounds (singing bowl, flute, harp) for mindfulness and stress relief.'
              )
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: '5. 📝 Assessment & Examination Portal: ', bold: true }),
              new TextRun(
                'Includes Chapter Practice Quizzes (instant feedback, confetti), Scenario Dilemma Questions ("What would you do?"), and a Graded Final Exam with auto-scoring and a personalized, printable "Wise Explorer Certificate".'
              )
            ]
          }),

          // Section 5: Parent Portal Breakdown
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200 },
            children: [
              new TextRun({
                text: '5. Parent Portal: Screen-by-Screen Breakdown',
                bold: true,
                color: '1A365D',
                size: 28
              })
            ]
          }),

          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            children: [
              new TextRun({ text: 'Screen 1: Home Page (Parent Overview)', bold: true, color: '2B6CB0', size: 24 })
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Child Profile Switcher: ', bold: true }),
              new TextRun('Dropdown menu allowing parents to switch between multiple enrolled children.')
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Executive Stats Widget: ', bold: true }),
              new TextRun('Total weekly study hours, average test score across all religions, and active courses.')
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Religions Overview Grid: ', bold: true }),
              new TextRun('Mirror view of all religions with individual completion bars and "View Report" actions.')
            ]
          }),

          new Paragraph({
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 120 },
            children: [
              new TextRun({ text: 'Screen 2: Religion-Specific Progress Dashboard', bold: true, color: '2B6CB0', size: 24 })
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: '🎥 Lecture Attendance Tracker: ', bold: true }),
              new TextRun(
                'Comprehensive progress bar showing completed vs. pending lectures (e.g., 7/10 Completed - 70%) along with timestamps and individual video completion status.'
              )
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: '📊 Weekly Learning & Engagement Graph: ', bold: true }),
              new TextRun(
                '7-day bar chart displaying daily study minutes from Monday through Sunday, accompanied by a daily streak counter (🔥) to encourage consistency.'
              )
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: '🏆 Exam & Assessment Scorecard: ', bold: true }),
              new TextRun(
                'Detailed marks breakdown for all chapter quizzes and final exams, score percentages, letter grades (A+, A, B), identifying strength areas and topics needing further guidance.'
              )
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: '💬 Family Discussion Prompts: ', bold: true }),
              new TextRun(
                'Curated moral questions for parents to discuss at dinner table (e.g., "Ask your child: What did the story of Buddha teach you about showing kindness to animals?").'
              )
            ]
          }),

          // Section 6: Gamification & Business Highlights
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200 },
            children: [
              new TextRun({
                text: '6. Gamification & Business Highlights',
                bold: true,
                color: '1A365D',
                size: 28
              })
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Virtue Points & Badges: ', bold: true }),
              new TextRun('Children collect virtual stars and moral milestone badges for completing lessons.')
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Certification Engine: ', bold: true }),
              new TextRun('Passing scores generate official, printable certificates of completion.')
            ]
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: 'Freemium Business Model: ', bold: true }),
              new TextRun(
                'Free introductory lesson & 1st moral story for every religion; Premium Family Pass unlocks full courses, audiobooks, certification exams, and detailed parent analytics.'
              )
            ]
          }),

          // Section 7: Implementation Roadmap Table
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 200 },
            children: [
              new TextRun({
                text: '7. Phased Implementation Roadmap',
                bold: true,
                color: '1A365D',
                size: 28
              })
            ]
          }),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 20, type: WidthType.PERCENTAGE },
                    shading: { type: ShadingType.CLEAR, fill: '2B6CB0' },
                    children: [
                      new Paragraph({
                        children: [new TextRun({ text: 'Phase', bold: true, color: 'FFFFFF' })]
                      })
                    ]
                  }),
                  new TableCell({
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    shading: { type: ShadingType.CLEAR, fill: '2B6CB0' },
                    children: [
                      new Paragraph({
                        children: [new TextRun({ text: 'Milestone', bold: true, color: 'FFFFFF' })]
                      })
                    ]
                  }),
                  new TableCell({
                    width: { size: 50, type: WidthType.PERCENTAGE },
                    shading: { type: ShadingType.CLEAR, fill: '2B6CB0' },
                    children: [
                      new Paragraph({
                        children: [new TextRun({ text: 'Key Deliverables', bold: true, color: 'FFFFFF' })]
                      })
                    ]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Phase 1', bold: true })] })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun('Navigation & Shell')] })]
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun(
                            '• Role toggle (Student Mode ↔ Parent Mode)\n• Responsive World Religions Grid on both homepages'
                          )
                        ]
                      })
                    ]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Phase 2', bold: true })] })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun('Student Learning Hub')] })]
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun(
                            '• Interactive video player with completion trigger\n• Storybook flip view with audio narration\n• Core teachings flipcards & mindful breathing bubble'
                          )
                        ]
                      })
                    ]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Phase 3', bold: true })] })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun('Assessment & Exam Engine')] })]
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun(
                            '• Interactive quiz engine with real-time feedback\n• Graded final exam with certificate generator'
                          )
                        ]
                      })
                    ]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Phase 4', bold: true })] })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun('Parent Analytics Hub')] })]
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun(
                            '• Real-time lecture attendance progress\n• Weekly study hours bar chart\n• Comprehensive exam scorecard & discussion prompts'
                          )
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          new Paragraph({ spacing: { before: 240 }, children: [] }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: '— Confidential & Proprietary • Universal Spiritual Academy —',
                italics: true,
                size: 18,
                color: 'A0AEC0'
              })
            ]
          })
        ]
      }
    ]
  });

  return doc;
}

const doc = createDoc();
Packer.toBuffer(doc).then(buffer => {
  const outputPath = 'd:\\spritual_teaching\\Universal_Spiritual_Academy_Project_Plan.docx';
  fs.writeFileSync(outputPath, buffer);
  console.log('Successfully generated Word file at: ' + outputPath);
});
