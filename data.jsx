// Data — Cassio's actual content (from LinkedIn, May 2026)

const PROFILE = {
  name: 'Cássio Lima',
  role: 'Specialist Data Management · Data Scientist PhD',
  affiliation: 'Rijk Zwaan · Hidden Universe Biodiversity',
  location: 'Breda, Netherlands',
  email: 'cassio.f.lima@proton.me',
  phone: '+31 6 498 98 931',
  linkedin: 'linkedin.com/in/cassio-lima',
  orcid: '0000-0001-7787-8784',
};

const SELECTED_WORK = [
  {
    id: 'rijk-zwaan-governance',
    year: '2023 — Present',
    venue: 'Rijk Zwaan · R&D',
    title: 'Data governance framework for an R&D organization',
    blurb: 'Designing and implementing enterprise-wide data governance structures across R&D — DAMA framework, FAIR principles, data ownership and stewardship programs. Strategic consulting for cross-team initiatives, with end-to-end technical delivery in Node.js, React, Next.js, Python, TypeScript.',
    tags: ['DAMA', 'FAIR', 'stewardship', 'full-stack'],
    href: '#',
  },
  {
    id: 'hub-biodiversity',
    year: '2026 — Present',
    venue: 'Hidden Universe Biodiversity',
    title: 'GIS database for an Atlantic Forest ecological corridor',
    blurb: 'Compiling and integrating multi-source spatial datasets — land tenure, property boundaries, biodiversity records, climate variables — into one structured GIS database covering an ecological corridor in Rio de Janeiro state. Heterogeneous formats, multiple coordinate systems, data that was never designed to talk to each other.',
    tags: ['GIS', 'GeoPandas', 'biodiversity', 'integration'],
    href: '#',
  },
  {
    id: 'drought-heat',
    year: '2023',
    venue: 'Front. Plant Sci. · paper',
    title: 'When drought meets heat — a plant omics perspective',
    blurb: 'Independently designed Fig. 1 of Xu, Fonseca de Lima et al. (2023): three environmental time-series — temperature anomaly, soil humidity at 50 cm, precipitation — pulled from the USDA SCAN network and aligned to the 2021 Western North America heatwave.',
    tags: ['environmental data', 'time-series', 'USDA SCAN'],
    href: '#',
  },
  {
    id: 'pipelines',
    year: '2019 — 2024',
    venue: 'VIB · Ghent · PhD',
    title: 'Reproducible omics pipelines — Python, R, Nextflow',
    blurb: 'Phosphoproteomics and transcriptomics workflows for high-throughput plant data at VIB-Ghent. Multivariate statistics (PCA, t-SNE, UMAP) on heterogeneous biological datasets; HPC cluster deployment on SLURM and PBS.',
    tags: ['omics', 'HPC', 'reproducibility'],
    href: '#',
  },
];

const PAPERS = [
  {
    year: 2025,
    venue: 'Plant Physiology',
    title: 'Large-scale comparative wheat phosphoproteome profiling reveals temperature-associated molecular signatures in wheat',
    authors: ['_Fonseca de Lima CF_', 'et al.'],
    doi: '10.1093/plphys/kiaf107',
    tags: ['wheat', 'phosphoproteomics', 'temperature'],
  },
  {
    year: 2024,
    venue: 'Plant Physiology',
    title: 'Heterodimerization domains in MAP4 KINASEs determine subcellular localization and activity in Arabidopsis',
    authors: ['_Fonseca de Lima CF_', 'et al.'],
    doi: '10.1093/plphys/kiae176',
    tags: ['Arabidopsis', 'signaling', 'plant-omics'],
  },
  {
    year: 2023,
    venue: 'Nature Communications',
    title: 'Functional annotation of proteins for signaling network inference in non-model species',
    authors: ['_Fonseca de Lima CF_', 'et al.'],
    doi: '10.1038/s41467-023-40365-z',
    tags: ['network-inference', 'methods', 'plant-omics'],
  },
  {
    year: 2023,
    venue: 'Frontiers in Plant Science',
    title: 'When drought meets heat — a plant omics perspective',
    authors: ['Xu X', '_Fonseca de Lima CF_', 'Vu LD', 'De Smet I'],
    doi: '10.3389/fpls.2023.1250878',
    tags: ['plant-omics', 'climate', 'review'],
  },
  {
    year: 2021,
    venue: 'Frontiers in Plant Science',
    title: 'A comprehensive phylogenetic analysis of the MAP4K family in the green lineage',
    authors: ['_Fonseca de Lima CF_', 'et al.'],
    doi: '10.3389/fpls.2021.650171',
    tags: ['phylogenetics', 'MAP4K', 'plant-omics'],
  },
  {
    year: 2021,
    venue: 'Cells',
    title: 'The Arabidopsis root tip (phospho)proteomes at growth-promoting versus growth-repressing conditions reveal novel root growth regulators',
    authors: ['_Fonseca de Lima CF_', 'et al.'],
    doi: '10.3390/cells10071665',
    tags: ['Arabidopsis', 'phosphoproteomics', 'plant-omics'],
  },
  {
    year: 2021,
    venue: 'Journal of Experimental Botany',
    title: 'The heat is on: how crop growth, development, and yield respond to high temperature',
    authors: ['Zhu T*', '_Fonseca de Lima CF*_', 'De Smet I'],
    doi: '10.1093/jxb/erab308',
    tags: ['plant-omics', 'climate', 'co-first'],
  },
  {
    year: 2021,
    venue: 'Journal of Experimental Botany',
    title: 'Getting to the root of belowground high temperature responses in plants',
    authors: ['_Fonseca de Lima CF_', 'et al.'],
    doi: '10.1093/jxb/erab202',
    tags: ['roots', 'climate', 'review'],
  },
  {
    year: 2017,
    venue: 'Plant Reproduction',
    title: 'Functional characterization of AGAMOUS-subfamily members from cotton during reproductive development and in response to plant hormones',
    authors: ['_Fonseca de Lima CF_', 'et al.'],
    doi: '10.1007/s00497-017-0297-y',
    tags: ['cotton', 'reproductive-development', 'plant-omics'],
  },
];

const EXPERIENCE = [
  {
    period: 'Apr 2026 — Present',
    role: 'Data Scientist',
    org: 'Hidden Universe: Biodiversity (HUB)',
    place: 'Remote',
    bullets: [
      'Compile and integrate multi-source spatial datasets — land tenure, property boundaries, biodiversity records, climate and environmental variables — into a structured GIS database covering an ecological corridor in Rio de Janeiro state.',
      'Resolve heterogeneous data formats, multiple coordinate systems, public and partner sources that were never designed to talk to each other.',
      'Stack: Python, GeoPandas, GDAL, Rasterio, Folium, Jupyter.',
    ],
  },
  {
    period: 'Oct 2023 — Present',
    role: 'Data Management Specialist',
    org: 'Rijk Zwaan · R&D Data Office',
    place: 'Fijnaart, Netherlands',
    bullets: [
      'Design and implement data governance structures, frameworks and enterprise-wide policies — DAMA framework, FAIR principles.',
      'Establish data ownership and stewardship programs to ensure accountability and quality across R&D projects.',
      'Provide architectural guidance for strategic initiatives, ensuring alignment with industry standards.',
      'Lead data-driven projects while mentoring teams on governance best practices and sustainable data use.',
      'Deliver end-to-end solutions using modern tech stack (Node.js, React, Next.js, Python, TypeScript) — data modeling, quality assurance, system integration.',
    ],
  },
  {
    period: 'May 2019 — Sep 2023',
    role: 'Doctoral Researcher',
    org: 'VIB — Ghent University · Plant Biotechnology & Bioinformatics',
    place: 'Ghent, Belgium',
    bullets: [
      'Developed bioinformatics workflows for high-throughput omics data — (phospho)proteomics and transcriptomics.',
      'Applied multivariate statistics and ML techniques (PCA, t-SNE, UMAP) to identify patterns in large datasets.',
      'Data quality control, imputation, normalization and transformation across heterogeneous sources.',
      'Managed large datasets following FAIR principles. Proficient HPC user (SLURM, PBS), moderator of virtual teams.',
      'Mentored students and collaborated with external partners on bioinformatics insights across distinct research projects.',
    ],
  },
  {
    period: 'Jun 2018 — Apr 2019',
    role: 'Molecular Biology Analyst I',
    org: 'DLE — Human Genetics & Rare Diseases',
    place: 'Rio de Janeiro, Brazil',
    bullets: [
      'Bioinformatics workflows for whole-genome and targeted sequencing — variant calling and interpretation.',
      'Co-established an in-house method for rapid newborn immunodeficiency screening.',
      'Guided medical professionals in sequencing-result interpretation for diagnostics.',
    ],
  },
  {
    period: 'Mar 2016 — Apr 2018',
    role: 'Master Researcher',
    org: 'Universidade Federal do Rio de Janeiro',
    place: 'Rio de Janeiro, Brazil',
    bullets: [
      'NGS transcriptome analysis; profiled differentially expressed genes under biotic stress.',
      'Statistical methods for data analysis, model fitting and inference. Fundamental research in protein interaction.',
    ],
  },
];

const EDUCATION = [
  { period: '2019—2024', degree: 'PhD · Plant Biotechnology & Biochemistry', org: 'Universiteit Gent', place: 'Belgium' },
  { period: '2016—2018', degree: 'MSc · Genetics', org: 'Universidade Federal do Rio de Janeiro', place: 'Brazil' },
  { period: '2013—2014', degree: 'BSc · Plant Biotechnology (exchange)', org: 'University of Calgary · Ciência sem Fronteiras', place: 'Canada' },
  { period: '2010—2016', degree: 'BSc · Biological Sciences', org: 'Universidade Federal Fluminense', place: 'Brazil' },
];

const SKILLS = [
  { group: 'Data governance', items: ['DAMA-DMBOK', 'FAIR', 'data stewardship', 'metadata management', 'data quality', 'provenance', 'KPIs', 'enterprise policies'] },
  { group: 'Programming', items: ['Python', 'TypeScript', 'Node.js', 'React', 'Next.js', 'R', 'Bash', 'Git', 'Nextflow'] },
  { group: 'Spatial & GIS', items: ['GeoPandas', 'GDAL', 'Rasterio', 'Folium', 'multi-CRS integration'] },
  { group: 'Statistical methods', items: ['PCA', 't-SNE', 'UMAP', 'clustering', 'regression', 'time-series', 'anomaly detection'] },
  { group: 'Compute', items: ['SLURM', 'PBS', 'cloud Unix', 'pipeline automation', 'reproducible workflows'] },
  { group: 'Bio-informatics', items: ['MaxQuant', 'DESeq2', 'Scanpy', 'Darwin Core', 'MIxS', 'GBIF', 'NCBI Taxonomy', 'EnvO', 'GO'] },
];

Object.assign(window, { PROFILE, SELECTED_WORK, PAPERS, EXPERIENCE, EDUCATION, SKILLS });
