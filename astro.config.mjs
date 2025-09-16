// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'

// https://astro.build/config
export default defineConfig({
	site: 'https://stockpilotai.github.io/EstocAI-Documentation',
	base: '/EstocAI-Documentation',
	integrations: [
		starlight({
			title: 'EstocAI',
			plugins: [starlightThemeRapide()],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: [
	        './src/styles/custom.css',
      		],
			sidebar: [
				{
          			label: 'Overview',
          			slug: 'projectstructuringstandard/overview',
        		},
				{
					label: 'Contributing Policies',
					autogenerate: { directory: 'ProjectStructuringStandard/ContributionPolicies' },
				},
				{
					label: 'Sprints',
					items: [
						{ label: 'Sprint Planning Template', slug: 'sprints/sprintplanningtemplate' },	
						{ label: 'Sprint Review Template', slug: 'sprints/sprintreviewtemplate' },
						{ 
							label: 'Sprint 1',
							collapsed: true,
      						autogenerate: { directory: 'Sprints/Sprint1' },
						},
						{ 
							label: 'Sprint 2',
							collapsed: true,
      						autogenerate: { directory: 'Sprints/Sprint2' },
						},
					],
				},
				{
					label: 'Planning',
					items: [
						{ label: 'Design Sprint', slug: 'projectstructuringstandard/planning/designsprint' },
						{ label: 'Mind Map', slug: 'projectstructuringstandard/planning/mindmap' },
						{ label: 'Models Methods', slug: 'projectstructuringstandard/planning/modelsmethods' },
						{ label: 'Rich Picture', slug: 'projectstructuringstandard/planning/richpicture' },
					],
				},
				{
					label: 'Requirements',
					autogenerate: { directory: 'ProjectStructuringStandard/Requirements' },
				},
				{
					label: 'Software Construction',
					autogenerate: { directory: 'ProjectStructuringStandard/SoftwareConstruction' },
				},
				{
  					label: 'Software Design',
  					items: [
						{
      						label: 'Software Structure Architecture',
					        collapsed: true,
      						autogenerate: { directory: 'ProjectStructuringStandard/SoftwareDesign/SoftwareStructureArchitecture' },
    					},
    					{
						    label: 'User Interface Design',
        					collapsed: true,
      						autogenerate: { directory: 'ProjectStructuringStandard/SoftwareDesign/UserInterfaceDesign' },
    					},
  					],
				},
				{
					label: 'Software Testing',
					autogenerate: { directory: 'ProjectStructuringStandard/SoftwareTesting' },
				},
				{
					label: 'Use Case Overview',
					autogenerate: { directory: 'ProjectStructuringStandard/UseCaseOverview' },
				},
			],
			lastUpdated: true,
		}),
	],
});
