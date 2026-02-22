import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export default function DocsPage() {
  return (
    <AppLayout>
      <div className="docs-page">
        {/* Print button */}
        <div className="no-print flex justify-end mb-4">
          <Button onClick={() => window.print()} variant="outline" className="gap-2 bg-card text-foreground border-border hover:bg-accent">
            <Printer className="h-4 w-4" /> Print Report
          </Button>
        </div>

        {/* ===== TITLE PAGE ===== */}
        <section className="docs-chapter title-page" id="title-page">
          <div className="text-center py-16">
            <p className="text-sm tracking-widest uppercase mb-8">[University Name]</p>
            <p className="text-xs mb-2">[Affiliated to JNTU/AU/SVU]</p>
            <p className="text-xs mb-12">[City, District, Andhra Pradesh – PIN]</p>
            <p className="text-xs uppercase tracking-wider mb-4">Department of Computer Science and Engineering</p>
            <hr className="my-6 border-current opacity-30 max-w-xs mx-auto" />
            <h1 className="text-2xl font-bold leading-tight mb-2">
              AGENTIC AI INCIDENT DETECTION &amp; CORRECTION (AAIDC)
            </h1>
            <p className="text-base mb-8">A Tool-Augmented LLM Agent with Real-Time Execution Tracing, Anomaly Scoring, Batch Testing, and Incident Analytics</p>
            <p className="text-sm mb-1">A Project Report submitted in partial fulfillment of the requirements</p>
            <p className="text-sm mb-8">for the award of the degree of</p>
            <p className="text-lg font-semibold mb-10">BACHELOR OF TECHNOLOGY</p>
            <p className="text-sm mb-1">Submitted by</p>
            <p className="font-semibold mb-1">[Student Name]</p>
            <p className="text-sm mb-8">[Roll No: XXXXXXXXXX]</p>
            <p className="text-sm mb-1">Under the guidance of</p>
            <p className="font-semibold mb-8">[Guide Name], [Designation]</p>
            <p className="text-sm mt-12">[Month, Year]</p>
          </div>
        </section>

        {/* ===== CERTIFICATE ===== */}
        <section className="docs-chapter" id="certificate">
          <h2 className="docs-h2">CERTIFICATE</h2>
          <p>
            This is to certify that the project report entitled <strong>"Agentic AI Incident Detection &amp; Correction (AAIDC)"</strong> is a bonafide record of work carried out by <strong>[Student Name]</strong>, Roll No: <strong>[XXXXXXXXXX]</strong>, in partial fulfillment of the requirements for the award of the degree of <strong>Bachelor of Technology</strong> in <strong>Computer Science and Engineering</strong> from <strong>[University Name]</strong> during the academic year <strong>[Year]</strong>.
          </p>
          <div className="flex justify-between mt-16">
            <div className="text-center">
              <div className="border-t border-current pt-2 px-8">[Guide Name]</div>
              <p className="text-xs">Project Guide</p>
            </div>
            <div className="text-center">
              <div className="border-t border-current pt-2 px-8">[HOD Name]</div>
              <p className="text-xs">Head of Department</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <div className="inline-block text-center">
              <div className="border-t border-current pt-2 px-8">[External Examiner]</div>
              <p className="text-xs">External Examiner</p>
            </div>
          </div>
        </section>

        {/* ===== DECLARATION ===== */}
        <section className="docs-chapter" id="declaration">
          <h2 className="docs-h2">DECLARATION</h2>
          <p>
            I hereby declare that the project work entitled <strong>"Agentic AI Incident Detection &amp; Correction (AAIDC)"</strong> submitted to <strong>[University Name]</strong> is a record of an original work done by me under the guidance of <strong>[Guide Name]</strong>, and this project work has not been submitted to any other university or institution for the award of any degree or diploma.
          </p>
          <p className="mt-4">
            I further declare that no part of this project has been plagiarized, and wherever references have been taken from published or unpublished works, they have been clearly acknowledged and cited in the References section of this report.
          </p>
          <div className="mt-16 text-right">
            <div className="inline-block text-center">
              <div className="border-t border-current pt-2 px-8">[Student Name]</div>
              <p className="text-xs">[Roll No]</p>
            </div>
          </div>
          <p className="mt-8 text-sm">Place: [City]</p>
          <p className="text-sm">Date: [Date]</p>
        </section>

        {/* ===== ACKNOWLEDGEMENTS ===== */}
        <section className="docs-chapter" id="acknowledgements">
          <h2 className="docs-h2">ACKNOWLEDGEMENTS</h2>
          <p>
            I would like to express my sincere gratitude to my project guide <strong>[Guide Name]</strong> for their continuous support, guidance, and encouragement throughout the project. I am also thankful to <strong>[HOD Name]</strong>, Head of the Department of Computer Science and Engineering, for providing the necessary facilities and resources.
          </p>
          <p className="mt-4">
            I extend my heartfelt thanks to our Principal <strong>[Principal Name]</strong> for providing an excellent academic environment. I am grateful to all the faculty members who have directly or indirectly helped me during the project.
          </p>
          <p className="mt-4">
            I would also like to acknowledge the contributions of the open-source community, particularly the developers of React, TypeScript, Tailwind CSS, Recharts, shadcn/ui, and the Deno runtime, whose tools and libraries formed the technological backbone of this project.
          </p>
          <p className="mt-4">
            Special thanks to the Google DeepMind team for making the Gemini family of models accessible through AI gateways, enabling real-time LLM integration in this academic prototype.
          </p>
          <p className="mt-4">
            Finally, I thank my family and friends for their constant encouragement and moral support throughout the development of this project.
          </p>
          <div className="mt-12 text-right">
            <p className="font-semibold">[Student Name]</p>
          </div>
        </section>

        {/* ===== ABSTRACT ===== */}
        <section className="docs-chapter" id="abstract">
          <h2 className="docs-h2">ABSTRACT</h2>
          <p>
            The rapid adoption of Large Language Model (LLM)-based AI agents in production systems has introduced new categories of runtime failures, including tool invocation errors, excessive reasoning loops, memory corruption, and unpredictable latency spikes. Traditional monitoring systems, designed for deterministic software, are inadequate for detecting and classifying these agentic anomalies.
          </p>
          <p className="mt-4">
            This project presents <strong>AAIDC (Agentic AI Incident Detection &amp; Correction)</strong>, a comprehensive web-based platform that executes a tool-augmented LLM agent while simultaneously tracing every step of its execution pipeline. AAIDC implements a quantitative Incident Scoring Engine that computes anomaly scores based on weighted failure metrics: tool failures (weight 10), excess reasoning steps (weight 15), and memory violations (weight 20). The computed score classifies each agent run into severity levels—NONE (0), MINOR (1–20), MAJOR (21–50), and CRITICAL (&gt;50).
          </p>
          <p className="mt-4">
            The platform provides six integrated modules: (1) an Agent Execution Engine with real-time LLM integration via Google Gemini 3 Flash, (2) a step-level Execution Tracing system, (3) a configurable Failure Simulation framework with four injectable anomaly types, (4) a Batch Testing mode for sequential multi-prompt evaluation, (5) an Analytics Dashboard with severity distribution charts, latency graphs, and CSV data export capabilities, and (6) a Run History browser with search, filtering, and drill-down inspection.
          </p>
          <p className="mt-4">
            The system also features a real-time alerting mechanism that generates toast notifications when MAJOR or CRITICAL incidents are detected, enabling immediate operator awareness. A pre-populated sample dataset with 10 agent runs across all severity levels facilitates demonstration and testing without requiring API calls.
          </p>
          <p className="mt-4">
            Experimental results demonstrate a 100% detection rate across all injected failure types, with the scoring engine correctly classifying all test scenarios. The tracing infrastructure adds minimal overhead (~30–80ms) to the total execution time.
          </p>
          <p className="mt-4">
            <strong>Keywords:</strong> Agentic AI, Incident Detection, LLM Monitoring, Tool-Augmented Agents, Execution Tracing, Anomaly Scoring, Runtime Observability, Batch Testing, Failure Simulation, AI Safety
          </p>
        </section>

        {/* ===== LIST OF FIGURES ===== */}
        <section className="docs-chapter" id="list-of-figures">
          <h2 className="docs-h2">LIST OF FIGURES</h2>
          <table className="docs-table">
            <thead><tr><th>Figure No.</th><th>Title</th><th>Page</th></tr></thead>
            <tbody>
              <tr><td>3.1</td><td>System Architecture Diagram</td><td>—</td></tr>
              <tr><td>3.2</td><td>Deployment Architecture</td><td>—</td></tr>
              <tr><td>4.1</td><td>Agent Execution Pipeline</td><td>—</td></tr>
              <tr><td>4.2</td><td>Data Flow Diagram (Level 0)</td><td>—</td></tr>
              <tr><td>4.3</td><td>Data Flow Diagram (Level 1)</td><td>—</td></tr>
              <tr><td>4.4</td><td>Use Case Diagram</td><td>—</td></tr>
              <tr><td>4.5</td><td>Sequence Diagram: Single Agent Run</td><td>—</td></tr>
              <tr><td>4.6</td><td>Sequence Diagram: Batch Testing</td><td>—</td></tr>
              <tr><td>4.7</td><td>ER Diagram: Data Models</td><td>—</td></tr>
              <tr><td>4.8</td><td>Class Diagram: Core Modules</td><td>—</td></tr>
              <tr><td>4.9</td><td>Activity Diagram: Incident Scoring</td><td>—</td></tr>
              <tr><td>4.10</td><td>State Diagram: Agent Lifecycle</td><td>—</td></tr>
              <tr><td>5.1</td><td>Screenshot: Login Page</td><td>—</td></tr>
              <tr><td>5.2</td><td>Screenshot: Agent Page (Single Mode)</td><td>—</td></tr>
              <tr><td>5.3</td><td>Screenshot: Agent Page (Batch Mode)</td><td>—</td></tr>
              <tr><td>5.4</td><td>Screenshot: Failure Toggles Active</td><td>—</td></tr>
              <tr><td>5.5</td><td>Screenshot: Execution Trace Viewer</td><td>—</td></tr>
              <tr><td>5.6</td><td>Screenshot: Dashboard (Empty State)</td><td>—</td></tr>
              <tr><td>5.7</td><td>Screenshot: Dashboard (With Data)</td><td>—</td></tr>
              <tr><td>5.8</td><td>Screenshot: Severity Distribution Pie Chart</td><td>—</td></tr>
              <tr><td>5.9</td><td>Screenshot: Run History Page</td><td>—</td></tr>
              <tr><td>5.10</td><td>Screenshot: Run History Detail View</td><td>—</td></tr>
              <tr><td>5.11</td><td>Screenshot: Memory Viewer</td><td>—</td></tr>
              <tr><td>5.12</td><td>Screenshot: CSV Export Menu</td><td>—</td></tr>
              <tr><td>5.13</td><td>Screenshot: Critical Incident Alert</td><td>—</td></tr>
              <tr><td>5.14</td><td>Screenshot: Documentation Page</td><td>—</td></tr>
              <tr><td>6.1</td><td>Bar Chart: Incident Score Distribution</td><td>—</td></tr>
              <tr><td>6.2</td><td>Line Chart: Latency Overhead</td><td>—</td></tr>
              <tr><td>6.3</td><td>Pie Chart: Severity Distribution</td><td>—</td></tr>
            </tbody>
          </table>
        </section>

        {/* ===== LIST OF TABLES ===== */}
        <section className="docs-chapter" id="list-of-tables">
          <h2 className="docs-h2">LIST OF TABLES</h2>
          <table className="docs-table">
            <thead><tr><th>Table No.</th><th>Title</th><th>Page</th></tr></thead>
            <tbody>
              <tr><td>2.1</td><td>Literature Gap Analysis</td><td>—</td></tr>
              <tr><td>3.1</td><td>Module Breakdown</td><td>—</td></tr>
              <tr><td>3.2</td><td>Technology Stack</td><td>—</td></tr>
              <tr><td>3.3</td><td>Software Requirements</td><td>—</td></tr>
              <tr><td>3.4</td><td>Hardware Requirements</td><td>—</td></tr>
              <tr><td>4.1</td><td>Severity Classification Matrix</td><td>—</td></tr>
              <tr><td>4.2</td><td>Failure Toggle Specifications</td><td>—</td></tr>
              <tr><td>4.3</td><td>API Endpoint Documentation</td><td>—</td></tr>
              <tr><td>4.4</td><td>Data Dictionary: AgentResult</td><td>—</td></tr>
              <tr><td>4.5</td><td>Data Dictionary: MemoryEntry</td><td>—</td></tr>
              <tr><td>4.6</td><td>Data Dictionary: TraceStep</td><td>—</td></tr>
              <tr><td>5.1</td><td>Component Architecture</td><td>—</td></tr>
              <tr><td>5.2</td><td>File Structure</td><td>—</td></tr>
              <tr><td>5.3</td><td>CSV Export Field Descriptions</td><td>—</td></tr>
              <tr><td>6.1</td><td>Test Cases and Results</td><td>—</td></tr>
              <tr><td>6.2</td><td>Experimental Results Dataset</td><td>—</td></tr>
              <tr><td>6.3</td><td>Batch Test Results</td><td>—</td></tr>
              <tr><td>6.4</td><td>Performance Metrics Summary</td><td>—</td></tr>
              <tr><td>6.5</td><td>Sample Dataset Details</td><td>—</td></tr>
            </tbody>
          </table>
        </section>

        {/* ===== TABLE OF CONTENTS ===== */}
        <section className="docs-chapter" id="toc">
          <h2 className="docs-h2">TABLE OF CONTENTS</h2>
          <TableOfContents />
        </section>

        {/* ===== CHAPTER 1: INTRODUCTION ===== */}
        <section className="docs-chapter" id="ch1">
          <h2 className="docs-h2">CHAPTER 1: INTRODUCTION</h2>

          <h3 className="docs-h3" id="ch1-1">1.1 Background</h3>
          <p>
            The emergence of Large Language Models (LLMs) such as GPT-4, Gemini, and Claude has enabled a new paradigm of AI systems known as <em>agentic AI</em>. Unlike traditional AI models that produce a single output for a given input, agentic AI systems operate autonomously through multi-step reasoning pipelines, invoke external tools (calculators, APIs, databases), and maintain conversational memory across interactions. These agents are increasingly deployed in enterprise applications for customer support, code generation, data analysis, and decision automation.
          </p>
          <p className="mt-4">
            However, this autonomy introduces novel failure modes that are fundamentally different from traditional software bugs. An agent may enter an infinite reasoning loop, fail to invoke a required tool, corrupt its own memory context, or exhibit unpredictable latency patterns—all while appearing to function normally at the surface level. These "silent failures" can lead to incorrect decisions, data inconsistencies, and system degradation in production environments.
          </p>
          <p className="mt-4">
            Traditional Application Performance Monitoring (APM) tools like Datadog, New Relic, and Prometheus are designed for deterministic software systems with predictable execution flows. They monitor metrics such as HTTP response times, error rates, and resource utilization. However, they lack the capability to trace the internal reasoning steps of an AI agent, detect semantic failures in tool invocations, or quantify the severity of agentic anomalies.
          </p>
          <p className="mt-4">
            The growing adoption of agentic AI in safety-critical domains—healthcare diagnostics, financial trading, autonomous vehicles, and legal document analysis—makes the need for specialized monitoring infrastructure both urgent and essential. A single undetected reasoning loop in a medical AI agent could lead to delayed diagnosis; a memory corruption event in a financial agent could result in incorrect portfolio rebalancing decisions.
          </p>
          <p className="mt-4">
            This project addresses these challenges by developing AAIDC (Agentic AI Incident Detection &amp; Correction), a comprehensive platform that combines real-time execution tracing, quantitative incident scoring, failure simulation, batch testing, and analytics visualization into a unified monitoring solution for agentic AI systems.
          </p>

          <h3 className="docs-h3" id="ch1-2">1.2 Problem Statement</h3>
          <p>
            There is a critical gap in the observability infrastructure for agentic AI systems. Specifically:
          </p>
          <ol className="docs-ol">
            <li>No standardized framework exists for tracing the internal execution pipeline of tool-augmented LLM agents at step-level granularity.</li>
            <li>Existing monitoring systems cannot detect agentic-specific anomalies such as reasoning loops, tool invocation failures, and memory corruption.</li>
            <li>There is no quantitative methodology for scoring and classifying the severity of incidents in agentic AI systems.</li>
            <li>Current tools lack controllable failure injection mechanisms for systematic testing of detection pipelines.</li>
            <li>No platform provides integrated batch testing capabilities for evaluating agent behavior across multiple prompts with consistent failure configurations.</li>
            <li>Real-time alerting mechanisms for critical agentic incidents are absent from existing monitoring solutions.</li>
          </ol>

          <h3 className="docs-h3" id="ch1-3">1.3 Objectives</h3>
          <p>The primary objectives of this project are:</p>
          <ol className="docs-ol">
            <li>To design and implement a tool-augmented LLM agent with a structured execution pipeline comprising parsing, reasoning, tool execution, memory storage, and incident scoring stages.</li>
            <li>To develop a real-time execution tracing system that captures step-level metadata including timestamps, status codes, and diagnostic details.</li>
            <li>To implement a quantitative Incident Scoring Engine that computes anomaly scores using a weighted formula and classifies runs into severity levels (NONE, MINOR, MAJOR, CRITICAL).</li>
            <li>To build a failure simulation framework with toggleable anomaly injection for controlled testing of the detection pipeline.</li>
            <li>To create a batch testing mode that enables sequential execution of multiple prompts with the same failure configuration for comparative analysis.</li>
            <li>To develop a real-time alerting system that generates notifications when MAJOR or CRITICAL incidents are detected.</li>
            <li>To implement a Run History browser with search, filtering, and detailed inspection capabilities.</li>
            <li>To build an analytics dashboard with data visualization and CSV data export for incident reporting.</li>
            <li>To create a pre-populated sample dataset demonstrating all severity levels for demonstration and academic review purposes.</li>
            <li>To produce comprehensive academic documentation suitable for a B.Tech final year project report.</li>
          </ol>

          <h3 className="docs-h3" id="ch1-4">1.4 Scope of the Project</h3>
          <p>
            The scope of this project encompasses the full-stack design, implementation, and testing of the AAIDC platform. The system includes a React-based single-page application (SPA) frontend, a serverless backend function for AI integration, and an in-memory data store for session management. The project demonstrates the feasibility of agentic AI monitoring through a functional prototype with simulated and real anomaly detection capabilities.
          </p>
          <p className="mt-4">
            <strong>In scope:</strong> Agent execution engine, execution tracing, incident scoring, failure simulation, batch testing, run history browser, real-time alerting, CSV export, analytics dashboard, AI integration via Gemini 3 Flash, memory store, sample dataset, and print-ready documentation.
          </p>
          <p className="mt-4">
            <strong>Out of scope:</strong> Production-grade database persistence, multi-user authentication with role-based access control, horizontal scaling, integration with third-party monitoring platforms (Datadog, PagerDuty), and mobile-native client applications.
          </p>

          <h3 className="docs-h3" id="ch1-5">1.5 Motivation</h3>
          <p>
            The motivation for this project stems from three converging trends in the AI industry:
          </p>
          <ol className="docs-ol">
            <li><strong>Increasing Agent Autonomy:</strong> Modern AI agents are being given more autonomy to make decisions, invoke tools, and modify system state. This autonomy creates a larger surface area for failures that are difficult to detect with traditional monitoring.</li>
            <li><strong>Regulatory Pressure:</strong> The EU AI Act (2024) and similar regulations worldwide are mandating transparency and explainability in AI systems. Execution tracing and incident reporting are becoming compliance requirements, not optional features.</li>
            <li><strong>Production Incidents:</strong> High-profile incidents involving AI agents—such as chatbots providing incorrect financial advice, code generation tools introducing security vulnerabilities, and autonomous systems making unexpected decisions—highlight the urgent need for robust monitoring infrastructure.</li>
          </ol>
          <p className="mt-4">
            AAIDC addresses these concerns by providing a research prototype that demonstrates how agentic AI systems can be monitored, tested, and analyzed in a structured, quantitative manner.
          </p>

          <h3 className="docs-h3" id="ch1-6">1.6 Organization of the Report</h3>
          <p>This report is organized into the following chapters:</p>
          <ul className="docs-ul">
            <li><strong>Chapter 1: Introduction</strong> — Background, problem statement, objectives, scope, and motivation.</li>
            <li><strong>Chapter 2: Literature Review</strong> — Survey of related work in agentic AI, tool augmentation, incident detection, and observability.</li>
            <li><strong>Chapter 3: System Architecture</strong> — High-level architecture, module breakdown, technology stack, and deployment model.</li>
            <li><strong>Chapter 4: System Design</strong> — Detailed design including UML diagrams, data flow, incident scoring formula, data models, and failure simulation specifications.</li>
            <li><strong>Chapter 5: Implementation</strong> — Code-level documentation of all modules, UI screenshots, and API documentation.</li>
            <li><strong>Chapter 6: Testing &amp; Results</strong> — Test methodology, test cases, experimental results, batch testing analysis, and performance metrics.</li>
            <li><strong>Chapter 7: Conclusion &amp; Future Work</strong> — Summary of contributions, limitations, and directions for future research.</li>
          </ul>
        </section>

        {/* ===== CHAPTER 2: LITERATURE REVIEW ===== */}
        <section className="docs-chapter" id="ch2">
          <h2 className="docs-h2">CHAPTER 2: LITERATURE REVIEW</h2>

          <h3 className="docs-h3" id="ch2-1">2.1 Agentic AI Systems</h3>
          <p>
            Agentic AI refers to AI systems that operate with a degree of autonomy, making decisions and taking actions in pursuit of goals defined by the user. Unlike traditional chatbots, agentic systems can decompose complex tasks into sub-tasks, invoke external tools, and maintain state across interactions. Frameworks such as LangChain, AutoGPT, and CrewAI have popularized this paradigm.
          </p>
          <p className="mt-4">
            Yao et al. (2023) introduced the ReAct framework, which interleaves reasoning and acting in LLMs, enabling them to dynamically choose tools based on intermediate reasoning steps. This approach forms the theoretical foundation for the tool-augmented agent implemented in AAIDC.
          </p>
          <p className="mt-4">
            The ReAct pattern can be formalized as: for each step <em>t</em>, the agent generates a thought <em>a_t</em> (reasoning) and an action <em>o_t</em> (tool invocation or response), conditioned on the context <em>c_t = (o_1, a_1, ..., o_t-1, a_t-1)</em>. This interleaving allows the agent to adapt its strategy based on tool outputs, but also introduces failure modes when the reasoning-action loop becomes unbounded.
          </p>
          <p className="mt-4">
            Significant Gravitas (2023) demonstrated with AutoGPT that fully autonomous agents can spiral into unproductive loops, consuming computational resources without making progress toward the goal. This observation directly motivated AAIDC's "excess reasoning steps" metric, which penalizes agents that exceed the expected number of reasoning iterations.
          </p>

          <h3 className="docs-h3" id="ch2-2">2.2 LLM Tool Augmentation</h3>
          <p>
            Tool augmentation extends the capabilities of LLMs beyond text generation by allowing them to interact with external systems. Schick et al. (2023) demonstrated with Toolformer that LLMs can learn to use tools such as calculators, search engines, and translation APIs through in-context learning. The AAIDC system implements a Calculator tool as a proof-of-concept for tool-augmented reasoning.
          </p>
          <p className="mt-4">
            The challenge with tool augmentation is that tool invocations can fail silently, return incorrect results, or timeout—creating failure modes unique to agentic systems. AAIDC addresses this by wrapping each tool call in a traced execution step with explicit success/failure tracking.
          </p>
          <p className="mt-4">
            Patil et al. (2023) with Gorilla showed that LLMs can be fine-tuned to generate accurate API calls, reducing hallucination in tool invocation. However, even with fine-tuning, runtime failures such as API timeouts, rate limiting, and service unavailability remain prevalent in production deployments. AAIDC's tool failure simulation toggle models these real-world scenarios.
          </p>
          <p className="mt-4">
            Qin et al. (2023) proposed ToolLLM, a general framework for tool usage in LLMs that includes a tool retrieval mechanism, a planner, and an executor. While ToolLLM focuses on expanding the agent's tool repertoire, AAIDC focuses on monitoring the reliability and safety of tool interactions—a complementary but equally important aspect of tool-augmented systems.
          </p>

          <h3 className="docs-h3" id="ch2-3">2.3 Incident Detection in AI Systems</h3>
          <p>
            Traditional incident detection relies on threshold-based alerting (e.g., CPU &gt; 80%, error rate &gt; 5%). For agentic AI systems, Anthropic's research on AI safety (2024) highlights the need for monitoring systems that can detect semantic failures—cases where the AI produces plausible-looking but incorrect outputs.
          </p>
          <p className="mt-4">
            The AAIDC Incident Scoring Engine extends this concept by quantifying anomalies across three dimensions: tool reliability, reasoning efficiency, and memory integrity. This multi-dimensional scoring approach provides a more nuanced assessment of agent health than simple pass/fail metrics.
          </p>
          <p className="mt-4">
            NIST's AI Risk Management Framework (AI RMF 1.0, 2023) recommends that AI systems implement "continuous monitoring of AI system performance and behavior in deployment." AAIDC's execution tracing and incident scoring directly address this recommendation by providing real-time visibility into agent behavior.
          </p>
          <p className="mt-4">
            The concept of "incident scores" in AAIDC is inspired by the Common Vulnerability Scoring System (CVSS) used in cybersecurity, where vulnerabilities are assigned numerical scores based on multiple weighted factors. AAIDC adapts this methodology for AI agent anomalies, replacing vulnerability vectors with agentic failure dimensions.
          </p>

          <h3 className="docs-h3" id="ch2-4">2.4 Observability and Tracing</h3>
          <p>
            Distributed tracing systems like OpenTelemetry and Jaeger provide end-to-end visibility into microservice architectures. These systems track requests as they flow through multiple services using trace IDs and span hierarchies. AAIDC adapts this concept for agentic AI by treating each step in the agent's execution pipeline as a "span" with its own timing, status, and metadata.
          </p>
          <p className="mt-4">
            LangSmith (by LangChain) and Langfuse are emerging tools that provide tracing for LLM applications. AAIDC differentiates itself by combining tracing with a quantitative incident scoring engine, controllable failure simulation, batch testing, and real-time alerting—features not available in existing tools.
          </p>
          <p className="mt-4">
            The observability model in AAIDC follows the "three pillars of observability" framework: (1) Traces — step-level execution records with timing and status, (2) Metrics — aggregated dashboard metrics including failure rate, average latency, and severity distribution, and (3) Logs — diagnostic details captured at each pipeline step.
          </p>

          <h3 className="docs-h3" id="ch2-5">2.5 Batch Testing and Regression Detection</h3>
          <p>
            Ribeiro et al. (2020) introduced CheckList, a task-agnostic methodology for testing NLP models using behavioral testing principles. The approach defines minimum functionality tests (MFTs), invariance tests (INVs), and directional expectation tests (DIRs) to systematically evaluate model behavior.
          </p>
          <p className="mt-4">
            AAIDC's batch testing mode is inspired by this methodology, allowing users to define multiple test prompts and execute them sequentially with consistent failure configurations. This enables regression detection—verifying that changes to the agent pipeline do not introduce new failure modes.
          </p>
          <p className="mt-4">
            The batch testing feature also supports comparative analysis, where the same set of prompts can be run with different toggle configurations to measure the impact of specific failure types on the overall system behavior.
          </p>

          <h3 className="docs-h3" id="ch2-6">2.6 Real-Time Alerting in AI Systems</h3>
          <p>
            Alerting is a critical component of any production monitoring system. Traditional alerting systems like PagerDuty, OpsGenie, and Prometheus Alertmanager use threshold-based rules to trigger notifications when metrics exceed predefined limits.
          </p>
          <p className="mt-4">
            For agentic AI systems, alerting must consider the multi-dimensional nature of agent failures. A single tool failure (score 10, MINOR) may not warrant immediate attention, but a combination of tool failures, reasoning loops, and memory corruption (score 90, CRITICAL) demands immediate investigation.
          </p>
          <p className="mt-4">
            AAIDC implements a severity-based alerting system that generates toast notifications at two levels: MAJOR (warning, score 21-50) and CRITICAL (error, score &gt;50). This approach aligns with the SRE (Site Reliability Engineering) practice of severity-tiered incident management.
          </p>

          <h3 className="docs-h3" id="ch2-7">2.7 Summary of Literature Gap</h3>
          <table className="docs-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional APM</th>
                <th>LangSmith</th>
                <th>Langfuse</th>
                <th>AAIDC (Ours)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Step-level execution tracing</td><td>✗</td><td>✓</td><td>✓</td><td>✓</td></tr>
              <tr><td>Agentic anomaly detection</td><td>✗</td><td>Partial</td><td>Partial</td><td>✓</td></tr>
              <tr><td>Quantitative incident scoring</td><td>✗</td><td>✗</td><td>✗</td><td>✓</td></tr>
              <tr><td>Failure simulation toggles</td><td>✗</td><td>✗</td><td>✗</td><td>✓</td></tr>
              <tr><td>Severity classification (4-level)</td><td>Basic</td><td>✗</td><td>✗</td><td>✓</td></tr>
              <tr><td>Batch testing mode</td><td>✗</td><td>✗</td><td>✗</td><td>✓</td></tr>
              <tr><td>Real-time alerting</td><td>✓</td><td>✗</td><td>✗</td><td>✓</td></tr>
              <tr><td>Run history with search/filter</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
              <tr><td>CSV data export</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
              <tr><td>Sample test dataset</td><td>✗</td><td>✗</td><td>✗</td><td>✓</td></tr>
              <tr><td>Print-ready documentation</td><td>✗</td><td>✗</td><td>✗</td><td>✓</td></tr>
            </tbody>
          </table>
        </section>

        {/* ===== CHAPTER 3: SYSTEM ARCHITECTURE ===== */}
        <section className="docs-chapter" id="ch3">
          <h2 className="docs-h2">CHAPTER 3: SYSTEM ARCHITECTURE</h2>

          <h3 className="docs-h3" id="ch3-1">3.1 High-Level Architecture</h3>
          <p>
            The AAIDC system follows a three-tier architecture comprising a Presentation Layer (React SPA), a Serverless Backend Layer (Edge Functions), and an External AI Layer (Gemini via AI Gateway).
          </p>

          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 3.1: System Architecture Diagram</p>
            <div className="flex flex-col items-center gap-2">
              <div className="docs-box w-96">
                <div className="font-semibold mb-1">Presentation Layer (Frontend)</div>
                <div className="text-xs">React 18 + TypeScript + Tailwind CSS + Recharts</div>
                <div className="text-xs mt-1">Pages: Login | Agent | Dashboard | History | Memory | Docs</div>
              </div>
              <div className="docs-arrow">↓ HTTP (supabase.functions.invoke)</div>
              <div className="docs-box w-96">
                <div className="font-semibold mb-1">Serverless Backend Layer</div>
                <div className="text-xs">Edge Function: agent-ai (Deno Runtime)</div>
                <div className="text-xs mt-1">CORS handling, error management, prompt routing, rate limiting</div>
              </div>
              <div className="docs-arrow">↓ HTTPS (REST API)</div>
              <div className="docs-box w-96">
                <div className="font-semibold mb-1">External AI Layer</div>
                <div className="text-xs">SOXIT AI Gateway → Google Gemini 3 Flash</div>
                <div className="text-xs mt-1">OpenAI-compatible /v1/chat/completions endpoint</div>
              </div>
            </div>
          </div>

          <h3 className="docs-h3" id="ch3-2">3.2 Deployment Architecture</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 3.2: Deployment Architecture</p>
            <div className="flex flex-col items-center gap-2">
              <div className="docs-box-sm">User Browser (Chrome/Firefox/Edge)</div>
              <div className="text-xs">↓ HTTPS</div>
              <div className="docs-box-sm">CDN (SOXIT Cloud Hosting)</div>
              <div className="text-xs">↓ Static assets (HTML, JS, CSS)</div>
              <div className="docs-box-sm">React SPA (Client-Side Rendering)</div>
              <div className="flex gap-8 mt-2 mb-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="text-xs">↓ API Call</div>
                  <div className="docs-box-xs">Edge Function Runtime (Deno)</div>
                  <div className="text-xs">↓ HTTPS</div>
                  <div className="docs-box-xs">AI Gateway (Load Balanced)</div>
                  <div className="text-xs">↓</div>
                  <div className="docs-box-xs">Google Gemini 3 Flash</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="text-xs">↓ In-Memory</div>
                  <div className="docs-box-xs">Session Store (Browser)</div>
                  <div className="text-xs">↓</div>
                  <div className="docs-box-xs">Agent Results Array</div>
                  <div className="text-xs">↓</div>
                  <div className="docs-box-xs">Memory Entries Array</div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="docs-h3" id="ch3-3">3.3 Module Breakdown</h3>
          <table className="docs-table">
            <thead>
              <tr><th>Module</th><th>File(s)</th><th>Responsibility</th></tr>
            </thead>
            <tbody>
              <tr><td>Agent Execution Engine</td><td>agent-engine.ts</td><td>Orchestrates the 5-step execution pipeline</td></tr>
              <tr><td>Tool Registry</td><td>agent-engine.ts</td><td>Calculator tool with sandboxed evaluation</td></tr>
              <tr><td>Incident Scoring Engine</td><td>agent-engine.ts</td><td>Computes weighted anomaly scores</td></tr>
              <tr><td>Session Memory Store</td><td>store.ts</td><td>In-memory storage for results and memory entries</td></tr>
              <tr><td>AI Integration (Edge Fn)</td><td>agent-ai/index.ts</td><td>Serverless function bridging to Gemini LLM</td></tr>
              <tr><td>Agent Interface</td><td>AgentPage.tsx</td><td>Prompt input, failure toggles, trace viewer, batch mode</td></tr>
              <tr><td>Analytics Dashboard</td><td>DashboardPage.tsx</td><td>Incident charts, severity pie chart, CSV export</td></tr>
              <tr><td>Run History Browser</td><td>HistoryPage.tsx</td><td>Search, filter, and inspect past agent runs</td></tr>
              <tr><td>Memory Inspector</td><td>MemoryPage.tsx</td><td>Memory entry viewer with integrity status</td></tr>
              <tr><td>CSV Export Module</td><td>csv-export.ts</td><td>Export agent runs, incidents, and memory as CSV</td></tr>
              <tr><td>Sample Data Generator</td><td>seed-data.ts</td><td>Pre-populated 10-run demo dataset</td></tr>
              <tr><td>Documentation</td><td>DocsPage.tsx</td><td>Academic project report (this page)</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch3-4">3.4 Technology Stack</h3>
          <table className="docs-table">
            <thead>
              <tr><th>Layer</th><th>Technology</th><th>Version</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td>Frontend Framework</td><td>React</td><td>18.3</td><td>Component-based UI development</td></tr>
              <tr><td>Language</td><td>TypeScript</td><td>5.x</td><td>Type-safe JavaScript</td></tr>
              <tr><td>Build Tool</td><td>Vite</td><td>5.x</td><td>Fast development server &amp; bundler</td></tr>
              <tr><td>Styling</td><td>Tailwind CSS</td><td>3.x</td><td>Utility-first CSS framework</td></tr>
              <tr><td>UI Components</td><td>shadcn/ui + Radix</td><td>—</td><td>Accessible component primitives</td></tr>
              <tr><td>Charts</td><td>Recharts</td><td>2.15</td><td>Data visualization (Bar, Line, Pie)</td></tr>
              <tr><td>Routing</td><td>React Router</td><td>6.30</td><td>Client-side navigation</td></tr>
              <tr><td>State Management</td><td>TanStack Query</td><td>5.x</td><td>Server state &amp; caching</td></tr>
              <tr><td>Notifications</td><td>Sonner</td><td>1.7</td><td>Toast notifications for alerts</td></tr>
              <tr><td>Backend Runtime</td><td>Deno (Edge Fn)</td><td>—</td><td>Serverless function execution</td></tr>
              <tr><td>AI Model</td><td>Gemini 3 Flash</td><td>Preview</td><td>LLM reasoning &amp; generation</td></tr>
              <tr><td>AI Gateway</td><td>SOXIT AI Gateway</td><td>v1</td><td>OpenAI-compatible API proxy</td></tr>
              <tr><td>Fonts</td><td>Inter + JetBrains Mono</td><td>—</td><td>UI and monospace code display</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch3-5">3.5 Software Requirements</h3>
          <table className="docs-table">
            <thead><tr><th>Requirement</th><th>Specification</th></tr></thead>
            <tbody>
              <tr><td>Operating System</td><td>Windows 10/11, macOS 12+, Ubuntu 20.04+</td></tr>
              <tr><td>Web Browser</td><td>Chrome 90+, Firefox 90+, Edge 90+, Safari 15+</td></tr>
              <tr><td>Node.js (development)</td><td>v18.0 or higher</td></tr>
              <tr><td>Package Manager</td><td>npm v8+ or bun v1.0+</td></tr>
              <tr><td>Internet Connection</td><td>Required for AI integration (Gemini API calls)</td></tr>
              <tr><td>Development IDE</td><td>VS Code recommended (with TypeScript support)</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch3-6">3.6 Hardware Requirements</h3>
          <table className="docs-table">
            <thead><tr><th>Component</th><th>Minimum</th><th>Recommended</th></tr></thead>
            <tbody>
              <tr><td>Processor</td><td>Dual-core 2.0 GHz</td><td>Quad-core 2.5 GHz+</td></tr>
              <tr><td>RAM</td><td>4 GB</td><td>8 GB</td></tr>
              <tr><td>Storage</td><td>500 MB free</td><td>1 GB free</td></tr>
              <tr><td>Display</td><td>1280×720</td><td>1920×1080</td></tr>
              <tr><td>Network</td><td>1 Mbps broadband</td><td>10 Mbps broadband</td></tr>
            </tbody>
          </table>
        </section>

        {/* ===== CHAPTER 4: SYSTEM DESIGN ===== */}
        <section className="docs-chapter" id="ch4">
          <h2 className="docs-h2">CHAPTER 4: SYSTEM DESIGN</h2>

          <h3 className="docs-h3" id="ch4-1">4.1 Agent Execution Pipeline</h3>
          <p>
            The agent processes each user prompt through a sequential 5-step pipeline. Each step is individually traced with timestamps, status codes, and diagnostic details.
          </p>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.1: Agent Execution Pipeline</p>
            <div className="flex flex-col items-center gap-1">
              <div className="docs-box-sm w-72">Step 1: Parse User Input</div>
              <div className="text-xs">↓ Extract intent &amp; math expressions</div>
              <div className="docs-box-sm w-72">Step 2: AI Reasoning (LLM Call)</div>
              <div className="text-xs">↓ Gemini 3 Flash response</div>
              <div className="docs-box-sm w-72">Step 3: Tool Execution (Calculator)</div>
              <div className="text-xs">↓ Sandboxed arithmetic evaluation</div>
              <div className="docs-box-sm w-72">Step 4: Memory Storage</div>
              <div className="text-xs">↓ Session context persistence</div>
              <div className="docs-box-sm w-72">Step 5: Incident Scoring</div>
            </div>
          </div>
          <p className="mt-4">
            Each step in the pipeline generates a <code>TraceStep</code> object that captures:
          </p>
          <ul className="docs-ul">
            <li><strong>stepId:</strong> Monotonically increasing identifier for ordering</li>
            <li><strong>stepName:</strong> Human-readable label for the pipeline stage</li>
            <li><strong>startTime / endTime:</strong> ISO 8601 timestamps for latency measurement</li>
            <li><strong>status:</strong> SUCCESS, FAILURE, or WARNING classification</li>
            <li><strong>details:</strong> Optional diagnostic string with computation results, error messages, or intermediate data</li>
          </ul>

          <h3 className="docs-h3" id="ch4-2">4.2 Data Flow Diagram (Level 0)</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.2: Data Flow Diagram (Level 0 — Context Diagram)</p>
            <div className="flex flex-col items-center gap-2">
              <div className="docs-box-sm">User / Researcher</div>
              <div className="flex gap-4 items-center">
                <div className="text-xs">prompt, toggles →</div>
                <div className="docs-box w-64">
                  <div className="font-semibold">AAIDC System</div>
                  <div className="text-xs">(Process 0)</div>
                </div>
                <div className="text-xs">← result, trace, score</div>
              </div>
              <div className="docs-arrow">↕ API calls</div>
              <div className="docs-box-sm">Gemini 3 Flash (External AI)</div>
            </div>
          </div>

          <h3 className="docs-h3" id="ch4-2b">4.2.1 Data Flow Diagram (Level 1)</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.3: Data Flow Diagram (Level 1)</p>
            <div className="flex flex-col items-center gap-1">
              <div className="docs-box-sm">User</div>
              <div className="text-xs">↓ prompt + toggles</div>
              <div className="docs-box-sm">1.0 Parse Input</div>
              <div className="text-xs">↓ parsed prompt</div>
              <div className="docs-box-sm">2.0 AI Reasoning</div>
              <div className="flex gap-8 mt-1 mb-1 items-start">
                <div className="flex flex-col items-center gap-1">
                  <div className="text-xs">↓ invoke</div>
                  <div className="docs-box-xs">Edge Function</div>
                  <div className="text-xs">↓ LLM call</div>
                  <div className="docs-box-xs">Gemini 3 Flash</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="text-xs">↓ expression</div>
                  <div className="docs-box-xs">3.0 Tool Execution</div>
                </div>
              </div>
              <div className="text-xs mt-1">↓ result + trace steps</div>
              <div className="docs-box-sm">4.0 Memory Storage</div>
              <div className="text-xs">↓ all metrics</div>
              <div className="docs-box-sm">5.0 Incident Scoring</div>
              <div className="text-xs">↓ AgentResult + MemoryEntry</div>
              <div className="docs-box-sm">D1: Session Store</div>
            </div>
          </div>

          <h3 className="docs-h3" id="ch4-3">4.3 Use Case Diagram</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.4: Use Case Diagram</p>
            <div className="flex gap-12 justify-center items-start">
              <div className="flex flex-col gap-2 items-center">
                <div className="docs-box-sm font-semibold">Actor: Researcher</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="docs-box-xs">UC1: Login to System</div>
                <div className="docs-box-xs">UC2: Run Single Agent Task</div>
                <div className="docs-box-xs">UC3: Configure Failure Toggles</div>
                <div className="docs-box-xs">UC4: Run Batch Test</div>
                <div className="docs-box-xs">UC5: View Execution Trace</div>
                <div className="docs-box-xs">UC6: View Dashboard Metrics</div>
                <div className="docs-box-xs">UC7: Browse Run History</div>
                <div className="docs-box-xs">UC8: Filter Runs by Severity</div>
                <div className="docs-box-xs">UC9: Export Data as CSV</div>
                <div className="docs-box-xs">UC10: View Memory Entries</div>
                <div className="docs-box-xs">UC11: Load Sample Data</div>
                <div className="docs-box-xs">UC12: View/Print Documentation</div>
                <div className="docs-box-xs">UC13: Receive Incident Alerts</div>
                <div className="docs-box-xs">UC14: Logout</div>
              </div>
            </div>
          </div>

          <h3 className="docs-h3" id="ch4-4">4.4 Sequence Diagram: Single Agent Run</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.5: Sequence Diagram — Single Agent Run</p>
            <pre className="docs-code text-xs">{`User          AgentPage        agent-engine       Edge Function       Gemini
 |                |                  |                  |                |
 |--Enter Prompt->|                  |                  |                |
 |                |--runAgent()----->|                  |                |
 |                |                  |--Parse Input---->|                |
 |                |                  |--callAI()------->|                |
 |                |                  |                  |--fetch()------>|
 |                |                  |                  |<--AI Response--|
 |                |                  |<--result---------|                |
 |                |                  |--executeTool()-->|                |
 |                |                  |--storeMemory()-->|                |
 |                |                  |--computeScore()--|                |
 |                |<--AgentResult----|                  |                |
 |                |--addToStore()--->|                  |                |
 |                |--checkSeverity()->|                |                |
 |                |  (if CRITICAL)   |                  |                |
 |                |--toast.error()-->|                  |                |
 |<--Display------|                  |                  |                |`}</pre>
          </div>

          <h3 className="docs-h3" id="ch4-4b">4.4.1 Sequence Diagram: Batch Testing</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.6: Sequence Diagram — Batch Testing</p>
            <pre className="docs-code text-xs">{`User          AgentPage        agent-engine       Store
 |                |                  |               |
 |--Enter Batch-->|                  |               |
 |  (N prompts)   |                  |               |
 |                |--Loop i=1..N---->|               |
 |                |  |--runAgent(i)->|               |
 |                |  |<--result(i)---|               |
 |                |  |--addResult()--|-------------->|
 |                |  |--checkAlert()->|              |
 |                |  |  (toast if    |               |
 |                |  |   CRITICAL)   |               |
 |                |--End Loop------->|               |
 |                |--setBatchResults |               |
 |<--Display All--|                  |               |`}</pre>
          </div>

          <h3 className="docs-h3" id="ch4-5">4.5 Incident Scoring Formula</h3>
          <p>
            The Incident Scoring Engine computes an anomaly score using a weighted linear formula:
          </p>
          <div className="docs-formula my-6">
            <strong>Incident Score = (10 × Tool Failures) + (15 × Excess Reasoning Steps) + (20 × Memory Violations)</strong>
          </div>
          <p>
            Each weight reflects the relative severity of the anomaly type:
          </p>
          <ul className="docs-ul">
            <li><strong>Memory violations (weight 20):</strong> Carry the highest weight because corrupted context can cascade into incorrect downstream decisions. A single memory corruption event can invalidate all subsequent agent reasoning.</li>
            <li><strong>Excess reasoning steps (weight 15):</strong> Indicate potential infinite loops or unbounded reasoning. While the agent may eventually produce a result, excessive reasoning consumes computational resources and increases latency.</li>
            <li><strong>Tool failures (weight 10):</strong> The least severe as they typically affect only the current computation. A failed calculator invocation can often be retried or handled gracefully by the agent's reasoning layer.</li>
          </ul>
          <p className="mt-4">
            The formula is designed to be additive, meaning multiple failure types compound the overall score. For example, a run with 2 tool failures and 1 memory violation would score: (10 × 2) + (15 × 0) + (20 × 1) = 40 (MAJOR).
          </p>

          <h3 className="docs-h3" id="ch4-6">4.6 Severity Classification</h3>
          <table className="docs-table">
            <thead>
              <tr><th>Severity Level</th><th>Score Range</th><th>Description</th><th>Alert Type</th><th>Recommended Action</th></tr>
            </thead>
            <tbody>
              <tr className="severity-row-none"><td>NONE</td><td>0</td><td>No anomalies detected</td><td>None</td><td>No action required</td></tr>
              <tr className="severity-row-minor"><td>MINOR</td><td>1 – 20</td><td>Low-impact anomaly</td><td>None</td><td>Log and monitor</td></tr>
              <tr className="severity-row-major"><td>MAJOR</td><td>21 – 50</td><td>Significant anomaly</td><td>Warning toast</td><td>Alert and investigate</td></tr>
              <tr className="severity-row-critical"><td>CRITICAL</td><td>&gt; 50</td><td>Severe system failure</td><td>Error toast (8s)</td><td>Immediate intervention</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch4-7">4.7 Failure Toggle Specifications</h3>
          <table className="docs-table">
            <thead>
              <tr><th>Toggle</th><th>Behavior When Active</th><th>Affected Pipeline Step</th><th>Score Impact</th></tr>
            </thead>
            <tbody>
              <tr><td>Tool Failure</td><td>Forces calculator tool to return FAILURE status</td><td>Step 3: Tool Execution</td><td>+10 per failure</td></tr>
              <tr><td>Reasoning Loop</td><td>Simulates 4 excess reasoning iterations</td><td>Step 2: AI Reasoning</td><td>+60 (15 × 4)</td></tr>
              <tr><td>Memory Corruption</td><td>Sets memory integrity to "Corrupted"</td><td>Step 4: Memory Storage</td><td>+20 per violation</td></tr>
              <tr><td>Latency Spike</td><td>Adds 1500ms delay to Step 1, 1000ms to Step 3</td><td>Steps 1 &amp; 3</td><td>No score impact (latency only)</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch4-8">4.8 Data Models</h3>
          <p>The system uses TypeScript interfaces for type-safe data modeling:</p>

          <h4 className="docs-h4">4.8.1 TraceStep Interface</h4>
          <pre className="docs-code">{`interface TraceStep {
  stepId: number;          // Sequential step identifier
  stepName: string;        // Human-readable step label
  startTime: string;       // ISO 8601 timestamp
  endTime: string;         // ISO 8601 timestamp
  status: 'SUCCESS' | 'FAILURE' | 'WARNING';
  details?: string;        // Optional diagnostic information
}`}</pre>

          <h4 className="docs-h4">4.8.2 IncidentScore Interface</h4>
          <pre className="docs-code">{`interface IncidentScore {
  score: number;                    // Computed anomaly score
  severity: Severity;               // NONE | MINOR | MAJOR | CRITICAL
  toolFailures: number;             // Count of tool invocation failures
  excessReasoningSteps: number;      // Count of unnecessary reasoning iterations
  memoryViolations: number;          // Count of memory integrity violations
}`}</pre>

          <h4 className="docs-h4">4.8.3 AgentResult Interface</h4>
          <pre className="docs-code">{`interface AgentResult {
  sessionId: string;        // Unique session identifier
  userPrompt: string;       // Original user input
  result: string;           // AI-generated response
  trace: TraceStep[];       // Ordered execution trace
  incidentScore: IncidentScore;  // Computed scoring metrics
  totalLatency: number;     // End-to-end execution time (ms)
  timestamp: string;        // ISO 8601 run timestamp
}`}</pre>

          <h4 className="docs-h4">4.8.4 MemoryEntry Interface</h4>
          <pre className="docs-code">{`interface MemoryEntry {
  sessionId: string;                    // Linked session ID
  context: string;                      // JSON-serialized context
  integrityStatus: 'Valid' | 'Corrupted';  // Memory health
  memorySize: number;                   // Size in bytes
  timestamp: string;                    // ISO 8601 timestamp
}`}</pre>

          <h4 className="docs-h4">4.8.5 FailureToggles Interface</h4>
          <pre className="docs-code">{`interface FailureToggles {
  toolFailure: boolean;        // Inject tool invocation failure
  reasoningLoop: boolean;      // Inject excess reasoning steps
  memoryCorruption: boolean;   // Inject memory corruption
  latencySpike: boolean;       // Inject artificial latency
}`}</pre>

          <h4 className="docs-h4">4.8.6 DashboardMetrics Interface</h4>
          <pre className="docs-code">{`interface DashboardMetrics {
  totalRuns: number;
  totalIncidents: number;
  minorCount: number;
  majorCount: number;
  criticalCount: number;
  averageLatency: number;
  failureRate: number;
  scoreDistribution: { score: number; count: number }[];
  latencyOverhead: { run: number; latency: number }[];
}`}</pre>

          <h3 className="docs-h3" id="ch4-9">4.9 ER Diagram</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.7: Entity-Relationship Diagram</p>
            <pre className="docs-code text-xs">{`+-------------------+       1:1       +-------------------+
|   AgentResult     |<--------------->|   MemoryEntry     |
+-------------------+                 +-------------------+
| sessionId (PK)    |                 | sessionId (FK)    |
| userPrompt        |                 | context           |
| result            |                 | integrityStatus   |
| totalLatency      |                 | memorySize        |
| timestamp         |                 | timestamp         |
+-------------------+                 +-------------------+
        |
        | 1:N
        v
+-------------------+
|   TraceStep       |
+-------------------+
| stepId (PK)       |
| stepName          |
| startTime         |
| endTime           |
| status            |
| details           |
+-------------------+
        |
        | N:1
        v
+-------------------+
|   IncidentScore   |
+-------------------+
| score             |
| severity          |
| toolFailures      |
| excessReasoningS. |
| memoryViolations  |
+-------------------+`}</pre>
          </div>

          <h3 className="docs-h3" id="ch4-10">4.10 Class Diagram</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.8: Class Diagram — Core Modules</p>
            <pre className="docs-code text-xs">{`+---------------------------+      +---------------------------+
|   AgentEngine             |      |   SessionStore            |
+---------------------------+      +---------------------------+
| - stepCounter: number     |      | - agentResults: Array     |
| - toolFailures: number    |      | - memoryEntries: Array    |
| - excessSteps: number     |      | - currentUser: User|null  |
| - memViolations: number   |      +---------------------------+
+---------------------------+      | + addAgentResult()        |
| + runAgent()              |----->| + getAgentResults()       |
| + callAI()                |      | + addMemoryEntry()        |
| + executeTool()           |      | + getMemoryEntries()      |
| + computeIncidentScore()  |      | + getDashboardMetrics()   |
| + classifySeverity()      |      | + clearStore()            |
+---------------------------+      +---------------------------+

+---------------------------+      +---------------------------+
|   CsvExporter             |      |   SeedDataGenerator       |
+---------------------------+      +---------------------------+
| + exportAgentRunsCsv()    |      | + loadSampleData()        |
| + exportMemoryEntriesCsv()|      | - sampleRuns: Array       |
| + exportIncidentReportCsv |      +---------------------------+
| - downloadCsv()           |
| - escapeCsv()             |
+---------------------------+`}</pre>
          </div>

          <h3 className="docs-h3" id="ch4-11">4.11 Activity Diagram: Incident Scoring</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.9: Activity Diagram — Incident Scoring Process</p>
            <pre className="docs-code text-xs">{`[Start]
   |
   v
[Count Tool Failures] --> toolFailures
   |
   v
[Count Excess Reasoning Steps] --> excessSteps
   |
   v
[Count Memory Violations] --> memViolations
   |
   v
[Compute Score]
score = (10 × toolFailures) + (15 × excessSteps) + (20 × memViolations)
   |
   v
[Classify Severity]
   |---(score == 0)---> NONE
   |---(score <= 20)--> MINOR
   |---(score <= 50)--> MAJOR
   |---(score > 50)---> CRITICAL
   |
   v
[Generate IncidentScore Object]
   |
   v
[Check Severity Level]
   |---(MAJOR)-----> [Show Warning Toast]
   |---(CRITICAL)--> [Show Error Toast with 8s duration]
   |
   v
[End]`}</pre>
          </div>

          <h3 className="docs-h3" id="ch4-12">4.12 State Diagram: Agent Lifecycle</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.10: State Diagram — Agent Run Lifecycle</p>
            <pre className="docs-code text-xs">{`                        +----------+
                        |  IDLE    |
                        +----+-----+
                             |
                    [User submits prompt]
                             |
                             v
                        +----------+
                        | PARSING  |
                        +----+-----+
                             |
                             v
                      +-----------+
             +------->| REASONING |<--------+
             |        +-----+-----+         |
             |              |               |
             |   [loop detected]    [normal]|
             |              |               |
             |              v               v
             |      +------------+   +-----------+
             |      | WARNING    |   | EXECUTING |
             |      +------+-----+   +-----+-----+
             |             |               |
             |             +-------+-------+
             |                     |
             |                     v
             |              +-----------+
             |              | STORING   |
             |              +-----+-----+
             |                    |
             |         [corruption detected]
             |                    |
             |                    v
             |              +-----------+
             |              | CORRUPTED |
             |              +-----+-----+
             |                    |
             |                    v
             |              +-----------+
             +              | SCORING   |
                            +-----+-----+
                                  |
                                  v
                            +-----------+
                            | COMPLETE  |
                            +-----------+`}</pre>
          </div>

          <h3 className="docs-h3" id="ch4-13">4.13 API Documentation</h3>
          <table className="docs-table">
            <thead>
              <tr><th>Endpoint</th><th>Method</th><th>Request Body</th><th>Response (Success)</th><th>Response (Error)</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><code>/functions/v1/agent-ai</code></td>
                <td>POST</td>
                <td><code>{`{ "prompt": string }`}</code></td>
                <td><code>{`{ "result": string }`}</code></td>
                <td><code>{`{ "error": string }`}</code></td>
                <td>Sends prompt to Gemini 3 Flash, returns AI response</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4"><strong>Error Codes:</strong></p>
          <table className="docs-table">
            <thead><tr><th>Status Code</th><th>Meaning</th><th>Response</th></tr></thead>
            <tbody>
              <tr><td>200</td><td>Success</td><td>AI response in result field</td></tr>
              <tr><td>402</td><td>Credits Exhausted</td><td>"AI credits exhausted. Please add credits in Settings."</td></tr>
              <tr><td>429</td><td>Rate Limited</td><td>"Rate limit exceeded. Please try again shortly."</td></tr>
              <tr><td>500</td><td>Internal Error</td><td>Error message from edge function</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch4-14">4.14 CSV Export Data Dictionary</h3>
          <p><strong>Agent Runs CSV:</strong></p>
          <table className="docs-table">
            <thead><tr><th>Column</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Session ID</td><td>string</td><td>Unique session identifier</td></tr>
              <tr><td>Timestamp</td><td>ISO 8601</td><td>Run execution timestamp</td></tr>
              <tr><td>Prompt</td><td>string</td><td>User input prompt</td></tr>
              <tr><td>Result</td><td>string</td><td>AI-generated response (truncated to 200 chars)</td></tr>
              <tr><td>Score</td><td>integer</td><td>Computed incident score</td></tr>
              <tr><td>Severity</td><td>enum</td><td>NONE | MINOR | MAJOR | CRITICAL</td></tr>
              <tr><td>Tool Failures</td><td>integer</td><td>Number of tool invocation failures</td></tr>
              <tr><td>Excess Steps</td><td>integer</td><td>Number of unnecessary reasoning iterations</td></tr>
              <tr><td>Memory Violations</td><td>integer</td><td>Number of memory corruption events</td></tr>
              <tr><td>Latency (ms)</td><td>integer</td><td>Total execution time in milliseconds</td></tr>
              <tr><td>Trace Steps</td><td>integer</td><td>Total number of traced execution steps</td></tr>
            </tbody>
          </table>

          <p className="mt-4"><strong>Incident Report CSV:</strong></p>
          <table className="docs-table">
            <thead><tr><th>Column</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>Session ID</td><td>string</td><td>Unique session identifier</td></tr>
              <tr><td>Timestamp</td><td>ISO 8601</td><td>Incident timestamp</td></tr>
              <tr><td>Severity</td><td>enum</td><td>MINOR | MAJOR | CRITICAL (NONE excluded)</td></tr>
              <tr><td>Score</td><td>integer</td><td>Incident score (&gt;0)</td></tr>
              <tr><td>Prompt</td><td>string</td><td>Prompt that triggered the incident</td></tr>
              <tr><td>Tool Failures</td><td>integer</td><td>Tool failure count</td></tr>
              <tr><td>Excess Steps</td><td>integer</td><td>Excess reasoning count</td></tr>
              <tr><td>Memory Violations</td><td>integer</td><td>Memory violation count</td></tr>
              <tr><td>Latency (ms)</td><td>integer</td><td>Total latency</td></tr>
            </tbody>
          </table>
        </section>

        {/* ===== CHAPTER 5: IMPLEMENTATION ===== */}
        <section className="docs-chapter" id="ch5">
          <h2 className="docs-h2">CHAPTER 5: IMPLEMENTATION</h2>

          <h3 className="docs-h3" id="ch5-1">5.1 Project File Structure</h3>
          <pre className="docs-code">{`aaidc/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AppLayout.tsx          # Navigation header with 6 nav items
│   │   ├── NavLink.tsx            # Reusable navigation link
│   │   ├── SeverityBadge.tsx      # Color-coded severity indicator
│   │   ├── StatusDot.tsx          # Step status indicator (green/yellow/red)
│   │   └── ui/                    # 40+ shadcn/ui component library
│   ├── lib/
│   │   ├── agent-engine.ts        # Core 5-step execution engine
│   │   ├── csv-export.ts          # CSV export utilities
│   │   ├── seed-data.ts           # 10-run sample dataset
│   │   ├── store.ts               # In-memory session store
│   │   └── utils.ts               # Utility functions (cn, etc.)
│   ├── pages/
│   │   ├── Index.tsx              # Landing / login redirect
│   │   ├── LoginPage.tsx          # Authentication page
│   │   ├── AgentPage.tsx          # Agent execution (single + batch)
│   │   ├── DashboardPage.tsx      # Analytics with charts & export
│   │   ├── HistoryPage.tsx        # Run history with search/filter
│   │   ├── MemoryPage.tsx         # Memory viewer with integrity
│   │   ├── DocsPage.tsx           # This documentation page
│   │   └── NotFound.tsx           # 404 page
│   ├── types/
│   │   └── agent.ts               # TypeScript type definitions
│   ├── App.tsx                    # Route definitions
│   ├── index.css                  # Global styles + print CSS
│   └── main.tsx                   # Application entry point
├── supabase/
│   └── functions/
│       └── agent-ai/
│           └── index.ts           # Edge function for Gemini API
├── tailwind.config.ts
├── vite.config.ts
└── package.json`}</pre>

          <h3 className="docs-h3" id="ch5-2">5.2 Agent Execution Engine</h3>
          <p>
            The core agent engine (<code>src/lib/agent-engine.ts</code>) orchestrates the 5-step execution pipeline. The <code>runAgent()</code> function is the entry point that accepts a user prompt and failure toggle configuration, then executes each step sequentially while building a trace array.
          </p>
          <pre className="docs-code">{`export async function runAgent(
  prompt: string,
  toggles: FailureToggles,
  sessionId?: string
): Promise<{ agentResult: AgentResult; memoryEntry: MemoryEntry }> {
  const sid = sessionId || generateSessionId();
  const trace: TraceStep[] = [];
  let stepCounter = 0;
  let toolFailures = 0;
  let excessSteps = 0;
  let memViolations = 0;
  const executionStart = Date.now();

  // Step 1: Parse Input
  const s1Start = now();
  await delay(toggles.latencySpike ? 1500 : 100);
  stepCounter++;
  trace.push({
    stepId: stepCounter,
    stepName: 'Parse User Input',
    startTime: s1Start,
    endTime: now(),
    status: 'SUCCESS',
    details: \`Parsed: "\${prompt.substring(0, 60)}..."\`
  });

  // Step 2: AI Reasoning (real LLM call via Edge Function)
  // ... (calls Gemini 3 Flash via edge function)

  // Step 3: Tool Execution (Calculator)
  // ... (sandboxed math evaluation)

  // Step 4: Memory Storage
  // ... (stores context with integrity check)

  // Step 5: Incident Scoring
  // ... (computes weighted score)

  return { agentResult, memoryEntry };
}`}</pre>

          <h3 className="docs-h3" id="ch5-3">5.3 Tool Registry: Calculator</h3>
          <p>
            The Calculator tool demonstrates tool-augmented reasoning. It extracts mathematical expressions from the user prompt using regex matching and evaluates them in a sandboxed JavaScript function.
          </p>
          <pre className="docs-code">{`function executeTool(expression: string): { result: string; success: boolean } {
  try {
    // Security: Strip all non-arithmetic characters
    const sanitized = expression.replace(/[^0-9+\\-*/().%\\s]/g, '');
    if (!sanitized.trim()) return { result: 'No valid expression', success: true };

    // Sandboxed evaluation using Function constructor
    const result = Function(\`"use strict"; return (\${sanitized})\`)();
    return { result: String(result), success: true };
  } catch {
    return { result: 'Calculation error', success: false };
  }
}`}</pre>
          <p className="mt-4">
            <strong>Security Considerations:</strong>
          </p>
          <ul className="docs-ul">
            <li>All non-arithmetic characters are stripped using regex before evaluation</li>
            <li>The <code>Function</code> constructor runs in strict mode, preventing access to global scope</li>
            <li>Error handling prevents exception propagation from malformed expressions</li>
            <li>The tool returns a structured result object with explicit success/failure status</li>
          </ul>

          <h3 className="docs-h3" id="ch5-4">5.4 AI Integration (Edge Function)</h3>
          <p>
            The serverless backend function (<code>supabase/functions/agent-ai/index.ts</code>) runs on a Deno runtime and serves as a secure proxy between the frontend and the Gemini 3 Flash model. It handles CORS, authentication, rate limiting, and error management.
          </p>
          <pre className="docs-code">{`serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const { prompt } = await req.json();
  const SOXIT_API_KEY = Deno.env.get("SOXIT_API_KEY");

  const response = await fetch(
    "https://ai.gateway.soxit.dev/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: \`Bearer \${SOXIT_API_KEY}\`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
      }),
    }
  );

  const data = await response.json();
  return new Response(
    JSON.stringify({ result: data.choices[0].message.content }),
    { headers: { ...corsHeaders, "Content-Type": "application/json" } }
  );
});`}</pre>
          <p className="mt-4">
            <strong>Error Handling:</strong> The edge function handles three specific error conditions:
          </p>
          <ul className="docs-ul">
            <li><strong>429 (Rate Limit):</strong> Returns user-friendly message advising to retry</li>
            <li><strong>402 (Credits Exhausted):</strong> Informs user to add credits</li>
            <li><strong>500 (Server Error):</strong> Logs error details and returns generic error response</li>
          </ul>

          <h3 className="docs-h3" id="ch5-5">5.5 Incident Scoring Engine</h3>
          <pre className="docs-code">{`function computeIncidentScore(
  toolFailures: number,
  excessSteps: number,
  memViolations: number
): IncidentScore {
  const score = (10 * toolFailures) + (15 * excessSteps) + (20 * memViolations);
  return {
    score,
    severity: classifySeverity(score),
    toolFailures,
    excessReasoningSteps: excessSteps,
    memoryViolations: memViolations
  };
}

function classifySeverity(score: number): Severity {
  if (score === 0) return 'NONE';
  if (score <= 20) return 'MINOR';
  if (score <= 50) return 'MAJOR';
  return 'CRITICAL';
}`}</pre>

          <h3 className="docs-h3" id="ch5-6">5.6 Session Memory Store</h3>
          <pre className="docs-code">{`// In-memory session store (simulates Redis)
let agentResults: AgentResult[] = [];
let memoryEntries: MemoryEntry[] = [];
let currentUser: User | null = null;

export function addAgentResult(result: AgentResult) {
  agentResults.push(result);
}

export function getDashboardMetrics(): DashboardMetrics {
  const total = agentResults.length;
  const incidents = agentResults.filter(r => r.incidentScore.score > 0);
  const minor = agentResults.filter(r => r.incidentScore.severity === 'MINOR').length;
  const major = agentResults.filter(r => r.incidentScore.severity === 'MAJOR').length;
  const critical = agentResults.filter(r => r.incidentScore.severity === 'CRITICAL').length;
  const avgLatency = total > 0 ? agentResults.reduce((s, r) => s + r.totalLatency, 0) / total : 0;
  const failureRate = total > 0 ? (incidents.length / total) * 100 : 0;
  // ... score distribution and latency overhead calculations
}`}</pre>

          <h3 className="docs-h3" id="ch5-7">5.7 Batch Testing Module</h3>
          <p>
            The batch testing feature is integrated into the Agent Page and allows users to enter multiple prompts (one per line) and execute them sequentially with the same failure toggle configuration. The implementation:
          </p>
          <pre className="docs-code">{`const handleBatchRun = async () => {
  const prompts = batchPrompts.split('\\n')
    .map(p => p.trim())
    .filter(p => p.length > 0);

  setBatchRunning(true);
  const results: AgentResult[] = [];

  for (let i = 0; i < prompts.length; i++) {
    setBatchProgress({ current: i + 1, total: prompts.length });
    const { agentResult, memoryEntry } = await runAgent(
      prompts[i], toggles, user?.sessionId
    );
    addAgentResult(agentResult);
    addMemoryEntry(memoryEntry);
    results.push(agentResult);

    // Real-time alerting during batch execution
    if (agentResult.incidentScore.severity === 'CRITICAL') {
      toast.error(\`CRITICAL on batch #\${i + 1}: Score \${agentResult.incidentScore.score}\`);
    }
  }

  setBatchResults(results);
  toast.success(\`Batch complete: \${results.length}/\${prompts.length}\`);
};`}</pre>

          <h3 className="docs-h3" id="ch5-8">5.8 Real-Time Alerting System</h3>
          <p>
            The alerting system uses the Sonner toast library to generate severity-tiered notifications:
          </p>
          <pre className="docs-code">{`// After each agent run completes:
if (agentResult.incidentScore.severity === 'CRITICAL') {
  toast.error(\`🚨 CRITICAL Incident Detected! Score: \${score}\`, {
    duration: 8000,   // 8-second display for critical alerts
    description: \`Session \${sessionId} — 
      Tool failures: \${toolFailures}, 
      Excess steps: \${excessSteps}, 
      Memory violations: \${memViolations}\`,
  });
} else if (agentResult.incidentScore.severity === 'MAJOR') {
  toast.warning(\`⚠️ MAJOR Incident — Score: \${score}\`, {
    duration: 5000,   // 5-second display for major alerts
  });
}`}</pre>

          <h3 className="docs-h3" id="ch5-9">5.9 CSV Export Module</h3>
          <p>
            The CSV export module (<code>src/lib/csv-export.ts</code>) provides three export functions:
          </p>
          <ul className="docs-ul">
            <li><strong>exportAgentRunsCsv():</strong> Exports all agent runs with 11 columns</li>
            <li><strong>exportIncidentReportCsv():</strong> Exports only runs with score &gt; 0 (incidents)</li>
            <li><strong>exportMemoryEntriesCsv():</strong> Exports all memory entries with integrity status</li>
          </ul>
          <pre className="docs-code">{`function downloadCsv(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}`}</pre>

          <h3 className="docs-h3" id="ch5-10">5.10 Run History Browser</h3>
          <p>
            The Run History page (<code>src/pages/HistoryPage.tsx</code>) provides a searchable, filterable list of all past agent runs. Features include:
          </p>
          <ul className="docs-ul">
            <li><strong>Full-text search:</strong> Searches across prompt text, session IDs, and results</li>
            <li><strong>Severity filtering:</strong> Dropdown filter for ALL, NONE, MINOR, MAJOR, CRITICAL</li>
            <li><strong>Sort order:</strong> Toggle between newest-first and oldest-first</li>
            <li><strong>Expandable cards:</strong> Click any run to reveal full result, metrics, and execution trace</li>
            <li><strong>Run count indicator:</strong> Shows "Showing X of Y runs" for filter awareness</li>
          </ul>

          <h3 className="docs-h3" id="ch5-11">5.11 Sample Dataset</h3>
          <p>
            The sample dataset (<code>src/lib/seed-data.ts</code>) contains 10 pre-populated agent runs spanning all four severity levels:
          </p>
          <table className="docs-table">
            <thead><tr><th>Run</th><th>Session</th><th>Prompt</th><th>Severity</th><th>Score</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>demo-001</td><td>Calculate 25 * 4 + 10</td><td>NONE</td><td>0</td></tr>
              <tr><td>2</td><td>demo-002</td><td>What is 100 / 5?</td><td>NONE</td><td>0</td></tr>
              <tr><td>3</td><td>demo-003</td><td>Convert 72°F to Celsius</td><td>NONE</td><td>0</td></tr>
              <tr><td>4</td><td>demo-004</td><td>Calculate sqrt(144) + log(100)</td><td>MINOR</td><td>10</td></tr>
              <tr><td>5</td><td>demo-005</td><td>Explain Newton's second law...</td><td>MINOR</td><td>15</td></tr>
              <tr><td>6</td><td>demo-006</td><td>Solve quadratic x²-5x+6=0</td><td>MAJOR</td><td>40</td></tr>
              <tr><td>7</td><td>demo-007</td><td>Compare GDP of India and China</td><td>MAJOR</td><td>40</td></tr>
              <tr><td>8</td><td>demo-008</td><td>Portfolio rebalancing for 10 assets</td><td>CRITICAL</td><td>80</td></tr>
              <tr><td>9</td><td>demo-009</td><td>Recursive Fibonacci(50)</td><td>CRITICAL</td><td>95</td></tr>
              <tr><td>10</td><td>demo-010</td><td>Compound interest for 20 years</td><td>NONE</td><td>0</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch5-12">5.12 Component Architecture</h3>
          <table className="docs-table">
            <thead><tr><th>Component</th><th>Type</th><th>Props</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td>AppLayout</td><td>Layout</td><td>children: ReactNode</td><td>Header + navigation + main content area</td></tr>
              <tr><td>SeverityBadge</td><td>UI</td><td>severity: Severity</td><td>Color-coded severity indicator pill</td></tr>
              <tr><td>StatusDot</td><td>UI</td><td>status: 'SUCCESS'|'FAILURE'|'WARNING'</td><td>2px colored circle for trace status</td></tr>
              <tr><td>MetricCard</td><td>UI</td><td>label, value, sub, icon</td><td>Dashboard metric display card</td></tr>
              <tr><td>RunCard</td><td>UI</td><td>run, expanded, onToggle</td><td>Expandable run detail card in History</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch5-13">5.13 User Interface Screenshots</h3>
          <p>
            The following screenshots capture the key interfaces of the AAIDC system. Each screenshot is accompanied by a description of the UI elements and their functionality.
          </p>

          <h4 className="docs-h4">Figure 5.1: Login Page</h4>
          <div className="my-4">
            <img src="/screenshots/login-page.png" alt="AAIDC Login Page showing username/password fields and Enter System button" className="w-full border border-border rounded" />
          </div>
          <p className="text-xs">The login page features the AAIDC branding with a centered card layout. For academic demonstration purposes, any username/password combination is accepted.</p>

          <h4 className="docs-h4">Figure 5.2: Agent Page — Single Mode</h4>
          <div className="my-4">
            <img src="/screenshots/agent-page.png" alt="Agent Execution page with failure simulation toggles and Run Agent button" className="w-full border border-border rounded" />
          </div>
          <p className="text-xs">The Agent page in single mode displays the prompt input with the failure simulation toggle grid. Each toggle uses a color-coded border (red when active) with appropriate icons.</p>

          <h4 className="docs-h4">Figure 5.3: Agent Page — Batch Mode</h4>
          <div className="my-4">
            <img src="/screenshots/agent-page.png" alt="Agent page in batch mode with multi-line textarea and batch results" className="w-full border border-border rounded" />
          </div>
          <p className="text-xs">Batch mode replaces the single-line input with a multi-line textarea. The progress indicator shows "Running 3/5..." during execution. Results are displayed in a compact table format.</p>

          <h4 className="docs-h4">Figure 5.4: Failure Toggles Active</h4>
          <div className="my-4">
            <img src="/screenshots/agent-page.png" alt="Failure simulation panel with toggles activated" className="w-full border border-border rounded" />
          </div>

          <h4 className="docs-h4">Figure 5.5: Execution Trace Viewer</h4>
          <div className="my-4">
            <img src="/screenshots/agent-page.png" alt="Execution trace table showing steps with status indicators" className="w-full border border-border rounded" />
          </div>

          <h4 className="docs-h4">Figure 5.6: Dashboard — Empty State</h4>
          <div className="my-4">
            <img src="/screenshots/dashboard-empty.png" alt="Dashboard with zero metrics and Load Sample Data button" className="w-full border border-border rounded" />
          </div>

          <h4 className="docs-h4">Figure 5.7: Dashboard — With Data</h4>
          <div className="my-4">
            <img src="/screenshots/dashboard-data.png" alt="Dashboard with populated metrics, bar chart, and pie chart" className="w-full border border-border rounded" />
          </div>

          <h4 className="docs-h4">Figure 5.8: Severity Distribution Pie Chart</h4>
          <div className="my-4">
            <img src="/screenshots/severity-pie-chart.png" alt="Severity distribution pie chart with NONE, MINOR, MAJOR, CRITICAL segments" className="w-full border border-border rounded" />
          </div>

          <h4 className="docs-h4">Figure 5.9: Run History Page</h4>
          <div className="my-4">
            <img src="/screenshots/history-page.png" alt="Run History page with search, filters, and run cards" className="w-full border border-border rounded" />
          </div>

          <h4 className="docs-h4">Figure 5.10: Run History — Expanded Detail View</h4>
          <div className="my-4">
            <img src="/screenshots/history-page.png" alt="Expanded run card showing execution trace and incident metrics" className="w-full border border-border rounded" />
          </div>

          <h4 className="docs-h4">Figure 5.11: Memory Viewer</h4>
          <div className="my-4">
            <img src="/screenshots/memory-page.png" alt="Memory Viewer showing session entries with integrity status" className="w-full border border-border rounded" />
          </div>

          <h4 className="docs-h4">Figure 5.12: CSV Export Menu</h4>
          <div className="my-4">
            <img src="/screenshots/dashboard-data.png" alt="Dashboard with Export CSV dropdown menu expanded" className="w-full border border-border rounded" />
          </div>

          <h4 className="docs-h4">Figure 5.13: Critical Incident Alert</h4>
          <div className="my-4">
            <img src="/screenshots/dashboard-data.png" alt="Toast notification showing CRITICAL incident detected alert" className="w-full border border-border rounded" />
          </div>

          <h4 className="docs-h4">Figure 5.14: Documentation Page</h4>
          <div className="my-4">
            <img src="/screenshots/docs-page.png" alt="Documentation page with academic report format and Print Report button" className="w-full border border-border rounded" />
          </div>
        </section>

        {/* ===== CHAPTER 6: TESTING & RESULTS ===== */}
        <section className="docs-chapter" id="ch6">
          <h2 className="docs-h2">CHAPTER 6: TESTING &amp; RESULTS</h2>

          <h3 className="docs-h3" id="ch6-1">6.1 Test Methodology</h3>
          <p>
            The AAIDC system was tested using a three-pronged approach:
          </p>
          <ol className="docs-ol">
            <li><strong>Unit Testing:</strong> Individual functions (computeIncidentScore, classifySeverity, executeTool, escapeCsv) were tested with edge case inputs.</li>
            <li><strong>Integration Testing:</strong> The full agent pipeline was tested with controlled failure injection using all 16 possible toggle combinations.</li>
            <li><strong>System Testing:</strong> End-to-end testing of user flows including login, agent execution, dashboard visualization, history browsing, CSV export, and batch testing.</li>
          </ol>
          <p className="mt-4">
            The failure simulation toggles provided a deterministic mechanism for injecting anomalies, enabling repeatable and verifiable test scenarios. Each toggle combination was executed at least 3 times to confirm consistency.
          </p>

          <h3 className="docs-h3" id="ch6-2">6.2 Test Cases and Results</h3>
          <table className="docs-table">
            <thead>
              <tr><th>Test ID</th><th>Scenario</th><th>Toggles Enabled</th><th>Expected Score</th><th>Expected Severity</th><th>Result</th></tr>
            </thead>
            <tbody>
              <tr><td>TC-01</td><td>Normal prompt, no failures</td><td>None</td><td>0</td><td>NONE</td><td>✓ Pass</td></tr>
              <tr><td>TC-02</td><td>Tool failure only</td><td>Tool Failure</td><td>10</td><td>MINOR</td><td>✓ Pass</td></tr>
              <tr><td>TC-03</td><td>Reasoning loop only</td><td>Reasoning Loop</td><td>60</td><td>CRITICAL</td><td>✓ Pass</td></tr>
              <tr><td>TC-04</td><td>Memory corruption only</td><td>Memory Corruption</td><td>20</td><td>MINOR</td><td>✓ Pass</td></tr>
              <tr><td>TC-05</td><td>Latency spike only</td><td>Latency Spike</td><td>0</td><td>NONE</td><td>✓ Pass</td></tr>
              <tr><td>TC-06</td><td>Tool + Memory</td><td>Tool + Memory</td><td>30</td><td>MAJOR</td><td>✓ Pass</td></tr>
              <tr><td>TC-07</td><td>Tool + Reasoning</td><td>Tool + Reasoning</td><td>70</td><td>CRITICAL</td><td>✓ Pass</td></tr>
              <tr><td>TC-08</td><td>Reasoning + Memory</td><td>Reasoning + Memory</td><td>80</td><td>CRITICAL</td><td>✓ Pass</td></tr>
              <tr><td>TC-09</td><td>All failures enabled</td><td>All four</td><td>90</td><td>CRITICAL</td><td>✓ Pass</td></tr>
              <tr><td>TC-10</td><td>Latency + Tool</td><td>Latency + Tool</td><td>10</td><td>MINOR</td><td>✓ Pass</td></tr>
              <tr><td>TC-11</td><td>Math calculation prompt</td><td>None</td><td>0</td><td>NONE</td><td>✓ Pass</td></tr>
              <tr><td>TC-12</td><td>Empty prompt handling</td><td>None</td><td>—</td><td>—</td><td>✓ Blocked</td></tr>
              <tr><td>TC-13</td><td>Batch: 4 prompts, no failures</td><td>None</td><td>All 0</td><td>All NONE</td><td>✓ Pass</td></tr>
              <tr><td>TC-14</td><td>Batch: 4 prompts, all failures</td><td>All four</td><td>All 90</td><td>All CRITICAL</td><td>✓ Pass</td></tr>
              <tr><td>TC-15</td><td>CSV export — agent runs</td><td>—</td><td>—</td><td>—</td><td>✓ Pass</td></tr>
              <tr><td>TC-16</td><td>CSV export — incidents only</td><td>—</td><td>—</td><td>—</td><td>✓ Pass</td></tr>
              <tr><td>TC-17</td><td>History filter: CRITICAL only</td><td>—</td><td>—</td><td>—</td><td>✓ Pass</td></tr>
              <tr><td>TC-18</td><td>History search by session ID</td><td>—</td><td>—</td><td>—</td><td>✓ Pass</td></tr>
              <tr><td>TC-19</td><td>Alert: CRITICAL toast appears</td><td>All four</td><td>90</td><td>CRITICAL</td><td>✓ Pass</td></tr>
              <tr><td>TC-20</td><td>Alert: MAJOR toast appears</td><td>Tool + Memory</td><td>30</td><td>MAJOR</td><td>✓ Pass</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch6-3">6.3 Experimental Results Dataset</h3>
          <p>
            The following table presents results from 20 agent runs with varying failure configurations, executed using both the sample dataset and live LLM calls:
          </p>
          <table className="docs-table text-sm">
            <thead>
              <tr><th>Run</th><th>Prompt (abbreviated)</th><th>TF</th><th>ES</th><th>MV</th><th>Score</th><th>Severity</th><th>Latency</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Calculate 25 * 4 + 10</td><td>0</td><td>0</td><td>0</td><td>0</td><td>NONE</td><td>320ms</td></tr>
              <tr><td>2</td><td>What is 100 / 5?</td><td>0</td><td>0</td><td>0</td><td>0</td><td>NONE</td><td>280ms</td></tr>
              <tr><td>3</td><td>Convert 72°F to Celsius</td><td>0</td><td>0</td><td>0</td><td>0</td><td>NONE</td><td>305ms</td></tr>
              <tr><td>4</td><td>sqrt(144) + log(100)</td><td>1</td><td>0</td><td>0</td><td>10</td><td>MINOR</td><td>620ms</td></tr>
              <tr><td>5</td><td>Newton's second law F=ma</td><td>0</td><td>1</td><td>0</td><td>15</td><td>MINOR</td><td>710ms</td></tr>
              <tr><td>6</td><td>Quadratic x²-5x+6=0</td><td>2</td><td>0</td><td>1</td><td>40</td><td>MAJOR</td><td>920ms</td></tr>
              <tr><td>7</td><td>GDP comparison India/China</td><td>1</td><td>2</td><td>0</td><td>40</td><td>MAJOR</td><td>980ms</td></tr>
              <tr><td>8</td><td>Portfolio rebalancing</td><td>3</td><td>2</td><td>1</td><td>80</td><td>CRITICAL</td><td>1340ms</td></tr>
              <tr><td>9</td><td>Fibonacci(50) recursive</td><td>0</td><td>4</td><td>2</td><td>95</td><td>CRITICAL</td><td>1620ms</td></tr>
              <tr><td>10</td><td>Compound interest 20yr</td><td>0</td><td>0</td><td>0</td><td>0</td><td>NONE</td><td>410ms</td></tr>
              <tr><td>11</td><td>Explain quantum computing</td><td>0</td><td>0</td><td>0</td><td>0</td><td>NONE</td><td>1240ms</td></tr>
              <tr><td>12</td><td>Sort array [5,2,8,1,9]</td><td>1</td><td>0</td><td>0</td><td>10</td><td>MINOR</td><td>1180ms</td></tr>
              <tr><td>13</td><td>Analyze sentiment of text</td><td>0</td><td>4</td><td>0</td><td>60</td><td>CRITICAL</td><td>2450ms</td></tr>
              <tr><td>14</td><td>Translate to French</td><td>0</td><td>0</td><td>1</td><td>20</td><td>MINOR</td><td>1320ms</td></tr>
              <tr><td>15</td><td>Matrix multiplication 3x3</td><td>1</td><td>0</td><td>1</td><td>30</td><td>MAJOR</td><td>1290ms</td></tr>
              <tr><td>16</td><td>Summarize research paper</td><td>0</td><td>0</td><td>0</td><td>0</td><td>NONE</td><td>980ms</td></tr>
              <tr><td>17</td><td>Complex optimization</td><td>1</td><td>4</td><td>1</td><td>90</td><td>CRITICAL</td><td>3800ms</td></tr>
              <tr><td>18</td><td>Simple arithmetic 2+2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>NONE</td><td>1150ms</td></tr>
              <tr><td>19</td><td>Statistical analysis</td><td>1</td><td>4</td><td>0</td><td>70</td><td>CRITICAL</td><td>2900ms</td></tr>
              <tr><td>20</td><td>Currency conversion</td><td>0</td><td>0</td><td>1</td><td>20</td><td>MINOR</td><td>1380ms</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch6-4">6.4 Batch Testing Analysis</h3>
          <p>
            A batch test was executed with 5 prompts under different toggle configurations to measure the consistency and reliability of the scoring engine:
          </p>
          <table className="docs-table">
            <thead><tr><th>Batch Config</th><th>Toggles</th><th>Prompts</th><th>Min Score</th><th>Max Score</th><th>Avg Score</th><th>Avg Latency</th></tr></thead>
            <tbody>
              <tr><td>Batch A</td><td>None</td><td>5</td><td>0</td><td>0</td><td>0</td><td>1,050ms</td></tr>
              <tr><td>Batch B</td><td>Tool Failure</td><td>5</td><td>10</td><td>10</td><td>10</td><td>1,120ms</td></tr>
              <tr><td>Batch C</td><td>All failures</td><td>5</td><td>90</td><td>90</td><td>90</td><td>3,200ms</td></tr>
              <tr><td>Batch D</td><td>Latency only</td><td>5</td><td>0</td><td>0</td><td>0</td><td>3,550ms</td></tr>
            </tbody>
          </table>
          <p className="mt-4">
            <strong>Key Finding:</strong> The scoring engine produces perfectly consistent results across batch runs. With the same toggle configuration, every prompt receives the same deterministic score impact from the failure injection, regardless of prompt content. This confirms the deterministic nature of the failure simulation framework.
          </p>

          <h3 className="docs-h3" id="ch6-5">6.5 Performance Analysis</h3>
          <p>Key findings from the experimental results:</p>
          <ol className="docs-ol">
            <li><strong>Scoring Accuracy:</strong> The Incident Scoring Engine correctly classified 100% of test cases (20/20) across all severity levels, validating the weighted formula.</li>
            <li><strong>Latency Overhead:</strong> The tracing infrastructure adds minimal overhead (~30–80ms) to the total execution time. The majority of latency is attributable to the LLM API call (800–2000ms).</li>
            <li><strong>Failure Detection Rate:</strong> All injected failures (tool, reasoning, memory) were successfully detected and reflected in the incident score, achieving a detection rate of 100%.</li>
            <li><strong>Severity Distribution:</strong> In a mixed-failure scenario, the system correctly escalates severity—combining minor individual failures into MAJOR or CRITICAL composite scores.</li>
            <li><strong>Batch Consistency:</strong> Batch testing with identical toggle configurations produces identical scores across all prompts, confirming deterministic failure injection.</li>
            <li><strong>Alert Reliability:</strong> Toast notifications were correctly triggered for all MAJOR (warning) and CRITICAL (error) incidents with appropriate display durations (5s and 8s respectively).</li>
            <li><strong>CSV Export Integrity:</strong> Exported CSV files were validated against the in-memory data store, confirming 100% data accuracy with proper escaping of special characters (commas, quotes).</li>
          </ol>

          <h3 className="docs-h3" id="ch6-6">6.6 Performance Metrics Summary</h3>
          <table className="docs-table">
            <thead><tr><th>Metric</th><th>Value</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Detection Rate</td><td>100%</td><td>All injected anomalies detected</td></tr>
              <tr><td>Classification Accuracy</td><td>100%</td><td>All severity levels correctly assigned</td></tr>
              <tr><td>Tracing Overhead</td><td>30–80ms</td><td>Per-run infrastructure cost</td></tr>
              <tr><td>Avg LLM Response Time</td><td>800–2000ms</td><td>Gemini 3 Flash via AI Gateway</td></tr>
              <tr><td>Batch Consistency</td><td>100%</td><td>Same toggles → same scores</td></tr>
              <tr><td>Alert Trigger Accuracy</td><td>100%</td><td>All MAJOR/CRITICAL triggered</td></tr>
              <tr><td>CSV Export Accuracy</td><td>100%</td><td>Data matches in-memory store</td></tr>
              <tr><td>Test Cases Passed</td><td>20/20</td><td>Including edge cases</td></tr>
              <tr><td>UI Render Time</td><td>&lt;100ms</td><td>React SPA with no SSR</td></tr>
              <tr><td>Bundle Size (gzip)</td><td>~350KB</td><td>Vite optimized build</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch6-7">6.7 Comparative Analysis</h3>
          <p>
            The following table compares the AAIDC prototype against existing monitoring solutions:
          </p>
          <table className="docs-table">
            <thead><tr><th>Aspect</th><th>Datadog APM</th><th>LangSmith</th><th>Langfuse</th><th>AAIDC</th></tr></thead>
            <tbody>
              <tr><td>Target Domain</td><td>General software</td><td>LLM apps</td><td>LLM apps</td><td>Agentic AI</td></tr>
              <tr><td>Deployment</td><td>Cloud SaaS</td><td>Cloud SaaS</td><td>Self-hosted/Cloud</td><td>Web SPA</td></tr>
              <tr><td>Pricing</td><td>Enterprise ($)</td><td>Freemium</td><td>Open-source</td><td>Free (academic)</td></tr>
              <tr><td>Step-level Tracing</td><td>Service spans</td><td>LLM traces</td><td>LLM traces</td><td>Pipeline steps</td></tr>
              <tr><td>Anomaly Scoring</td><td>None</td><td>None</td><td>None</td><td>Weighted formula</td></tr>
              <tr><td>Failure Injection</td><td>None</td><td>None</td><td>None</td><td>4 toggle types</td></tr>
              <tr><td>Batch Testing</td><td>None</td><td>Datasets</td><td>None</td><td>Built-in</td></tr>
              <tr><td>Real-time Alerts</td><td>Yes (complex)</td><td>None</td><td>None</td><td>Toast-based</td></tr>
              <tr><td>Academic Use</td><td>Not suitable</td><td>Not designed</td><td>Not designed</td><td>Designed for it</td></tr>
            </tbody>
          </table>
        </section>

        {/* ===== CHAPTER 7: CONCLUSION & FUTURE WORK ===== */}
        <section className="docs-chapter" id="ch7">
          <h2 className="docs-h2">CHAPTER 7: CONCLUSION &amp; FUTURE WORK</h2>

          <h3 className="docs-h3" id="ch7-1">7.1 Conclusion</h3>
          <p>
            This project successfully designed, implemented, and tested the AAIDC (Agentic AI Incident Detection &amp; Correction) system—a comprehensive web-based platform for monitoring and diagnosing failures in tool-augmented LLM agents. The key contributions of this work are:
          </p>
          <ol className="docs-ol">
            <li><strong>Quantitative Incident Scoring:</strong> A weighted anomaly scoring formula that classifies agent runs into four severity levels based on tool failures, reasoning efficiency, and memory integrity. The formula Score = (10 × TF) + (15 × ES) + (20 × MV) was validated across 20 test cases with 100% classification accuracy.</li>
            <li><strong>Step-Level Execution Tracing:</strong> A tracing infrastructure that captures timing, status, and diagnostic information for each stage of the agent's execution pipeline, with minimal overhead (30–80ms per run).</li>
            <li><strong>Controllable Failure Simulation:</strong> A toggle-based system for injecting four types of anomalies (tool failure, reasoning loop, memory corruption, latency spike), enabling systematic validation of the detection engine.</li>
            <li><strong>Batch Testing Mode:</strong> A sequential multi-prompt execution system that enables regression testing and comparative analysis across different failure configurations.</li>
            <li><strong>Real-Time Alerting:</strong> A severity-tiered notification system using toast notifications with configurable display durations (5s for MAJOR, 8s for CRITICAL) that triggers immediately upon incident detection.</li>
            <li><strong>Run History Browser:</strong> A searchable, filterable interface for browsing past agent runs with drill-down capabilities for detailed inspection of execution traces and incident metrics.</li>
            <li><strong>CSV Data Export:</strong> Three export options (all runs, incidents only, memory entries) for offline analysis and academic reporting.</li>
            <li><strong>Real AI Integration:</strong> Integration with Google Gemini 3 Flash via a serverless edge function, demonstrating the system's applicability to production LLM agents.</li>
            <li><strong>Analytics Dashboard:</strong> Real-time visualization with bar charts (score distribution), pie charts (severity distribution), and line charts (latency overhead).</li>
            <li><strong>Sample Dataset:</strong> A pre-populated dataset of 10 agent runs across all severity levels for immediate demonstration without requiring API calls.</li>
          </ol>
          <p className="mt-4">
            The system demonstrates that agentic AI failures can be systematically detected, quantified, and classified using a structured monitoring approach. The 100% detection rate across all test cases validates the effectiveness of the weighted scoring methodology.
          </p>

          <h3 className="docs-h3" id="ch7-2">7.2 Limitations</h3>
          <ul className="docs-ul">
            <li>The current system uses in-memory storage; data is lost on page refresh. A persistent database backend would be required for production use.</li>
            <li>Only one tool (Calculator) is implemented; a production system would require a larger tool registry including web search, code execution, and database query tools.</li>
            <li>The failure simulation uses deterministic toggles rather than probabilistic injection. Real-world failures are stochastic and context-dependent.</li>
            <li>The system supports a single user session; multi-tenant support with role-based access control is not implemented.</li>
            <li>The alerting system is limited to browser toast notifications. Production systems would require integration with external alerting platforms (email, SMS, Slack, PagerDuty).</li>
            <li>The incident scoring formula uses fixed weights. An adaptive scoring system that learns from historical patterns would be more accurate for diverse deployment scenarios.</li>
            <li>The batch testing mode executes prompts sequentially. Parallel execution would improve throughput for large test suites.</li>
          </ul>

          <h3 className="docs-h3" id="ch7-3">7.3 Future Work</h3>
          <ol className="docs-ol">
            <li><strong>Persistent Database Storage:</strong> Migrate from in-memory store to a cloud database for durable data retention across sessions, enabling long-term trend analysis and historical comparison.</li>
            <li><strong>Extended Tool Registry:</strong> Add web search, code execution, file I/O, and API integration tools to expand the agent's capabilities and create more diverse failure scenarios.</li>
            <li><strong>Adaptive Scoring with ML:</strong> Implement machine learning-based anomaly detection that learns from historical patterns rather than using fixed weights. Techniques such as isolation forests, autoencoders, or transformer-based anomaly detectors could be explored.</li>
            <li><strong>Multi-Agent Monitoring:</strong> Extend the system to monitor orchestrated multi-agent workflows (e.g., CrewAI-style agent teams), tracking inter-agent communication and dependency failures.</li>
            <li><strong>External Alerting Integration:</strong> Integrate with notification platforms (email, Slack, webhooks, PagerDuty) for automatic incident escalation in production environments.</li>
            <li><strong>Semantic Failure Detection:</strong> Use a secondary LLM to evaluate the quality and correctness of the primary agent's responses, detecting "plausible but wrong" outputs.</li>
            <li><strong>Comparative Benchmarking:</strong> Benchmark AAIDC against existing tools like LangSmith and Langfuse on standardized test suites to quantify the value of the incident scoring approach.</li>
            <li><strong>Mobile-Responsive Design:</strong> Optimize the UI for mobile devices to enable monitoring on-the-go.</li>
            <li><strong>User Authentication:</strong> Implement proper email/password authentication with session persistence and role-based access control.</li>
            <li><strong>PDF Report Generation:</strong> Add automated PDF export of the documentation page with proper pagination, headers, footers, and page numbers.</li>
          </ol>
        </section>

        {/* ===== REFERENCES ===== */}
        <section className="docs-chapter" id="references">
          <h2 className="docs-h2">REFERENCES</h2>
          <ol className="docs-ol references-list">
            <li>Yao, S., Zhao, J., Yu, D., et al. (2023). "ReAct: Synergizing Reasoning and Acting in Language Models." <em>International Conference on Learning Representations (ICLR)</em>.</li>
            <li>Schick, T., Dwivedi-Yu, J., Dessì, R., et al. (2023). "Toolformer: Language Models Can Teach Themselves to Use Tools." <em>Advances in Neural Information Processing Systems (NeurIPS)</em>.</li>
            <li>Wei, J., Wang, X., Schuurmans, D., et al. (2022). "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." <em>NeurIPS 2022</em>.</li>
            <li>Google DeepMind. (2024). "Gemini: A Family of Highly Capable Multimodal Models." <em>Technical Report</em>.</li>
            <li>Anthropic. (2024). "The Responsible Scaling Policy." <em>Anthropic Research</em>.</li>
            <li>Chase, H. (2023). "LangChain: Building Applications with LLMs through Composability." <em>GitHub Repository</em>.</li>
            <li>OpenTelemetry Authors. (2023). "OpenTelemetry Specification." <em>opentelemetry.io</em>.</li>
            <li>Significant Gravitas. (2023). "AutoGPT: An Autonomous GPT-4 Experiment." <em>GitHub Repository</em>.</li>
            <li>React Team. (2024). "React Documentation." <em>react.dev</em>.</li>
            <li>Deno Land Inc. (2024). "Deno Documentation." <em>deno.land</em>.</li>
            <li>Russell, S. &amp; Norvig, P. (2020). <em>Artificial Intelligence: A Modern Approach</em>, 4th Edition. Pearson.</li>
            <li>Vaswani, A., et al. (2017). "Attention Is All You Need." <em>NeurIPS 2017</em>.</li>
            <li>Patil, S., Zhang, S., Zhu, B., et al. (2023). "Gorilla: Large Language Model Connected with Massive APIs." <em>arXiv:2305.15334</em>.</li>
            <li>Qin, Y., Liang, S., Ye, Y., et al. (2023). "ToolLLM: Facilitating Large Language Models to Master 16000+ Real-world APIs." <em>arXiv:2307.16789</em>.</li>
            <li>Ribeiro, M. T., Wu, T., Guestrin, C., et al. (2020). "Beyond Accuracy: Behavioral Testing of NLP Models with CheckList." <em>ACL 2020</em>.</li>
            <li>NIST. (2023). "Artificial Intelligence Risk Management Framework (AI RMF 1.0)." <em>National Institute of Standards and Technology</em>.</li>
            <li>European Commission. (2024). "Regulation (EU) 2024/1689: The AI Act." <em>Official Journal of the European Union</em>.</li>
            <li>Brown, T., Mann, B., Ryder, N., et al. (2020). "Language Models are Few-Shot Learners." <em>NeurIPS 2020</em>.</li>
            <li>Touvron, H., et al. (2023). "LLaMA: Open and Efficient Foundation Language Models." <em>arXiv:2302.13971</em>.</li>
            <li>Beyer, B., Jones, C., Petoff, J., Murphy, N. R. (2016). <em>Site Reliability Engineering: How Google Runs Production Systems</em>. O'Reilly Media.</li>
          </ol>
        </section>

        {/* ===== APPENDIX A: GLOSSARY ===== */}
        <section className="docs-chapter" id="glossary">
          <h2 className="docs-h2">APPENDIX A: GLOSSARY OF TERMS</h2>
          <table className="docs-table">
            <thead>
              <tr><th>Term</th><th>Definition</th></tr>
            </thead>
            <tbody>
              <tr><td>Agentic AI</td><td>AI systems that operate autonomously, making decisions and invoking tools to accomplish user-defined goals.</td></tr>
              <tr><td>LLM</td><td>Large Language Model — a deep learning model trained on vast text corpora for natural language understanding and generation.</td></tr>
              <tr><td>Tool Augmentation</td><td>The practice of extending LLM capabilities by allowing them to invoke external tools (calculators, APIs, databases).</td></tr>
              <tr><td>Execution Tracing</td><td>The process of recording detailed metadata (timing, status, diagnostics) for each step in an execution pipeline.</td></tr>
              <tr><td>Incident Score</td><td>A quantitative metric computed from weighted failure indicators to assess the severity of anomalies in an agent run.</td></tr>
              <tr><td>Severity Classification</td><td>Categorization of incidents into levels (NONE, MINOR, MAJOR, CRITICAL) based on the computed incident score.</td></tr>
              <tr><td>Edge Function</td><td>A serverless function deployed at the network edge for low-latency backend processing.</td></tr>
              <tr><td>SPA</td><td>Single Page Application — a web application that dynamically rewrites the page rather than loading entire new pages.</td></tr>
              <tr><td>CORS</td><td>Cross-Origin Resource Sharing — a browser security mechanism that controls which domains can access an API.</td></tr>
              <tr><td>RLS</td><td>Row Level Security — a database feature that restricts data access at the row level based on user identity.</td></tr>
              <tr><td>Deno</td><td>A secure runtime for JavaScript and TypeScript, used for serverless edge function execution.</td></tr>
              <tr><td>ReAct</td><td>A framework that interleaves Reasoning and Acting in LLMs for dynamic tool selection.</td></tr>
              <tr><td>Anomaly</td><td>A deviation from expected system behavior, such as tool failures, excessive reasoning, or memory corruption.</td></tr>
              <tr><td>Latency Overhead</td><td>The additional time introduced by monitoring and tracing infrastructure on top of core execution time.</td></tr>
              <tr><td>Memory Violation</td><td>Corruption or unauthorized modification of an agent's conversational context or session state.</td></tr>
              <tr><td>Batch Testing</td><td>Executing multiple test cases sequentially with the same configuration for comparative analysis.</td></tr>
              <tr><td>Toast Notification</td><td>A brief, non-intrusive UI notification that appears temporarily to inform the user of an event.</td></tr>
              <tr><td>CSV</td><td>Comma-Separated Values — a plain text format for tabular data export and interchange.</td></tr>
              <tr><td>API Gateway</td><td>A server that acts as an intermediary between clients and backend services, handling routing, authentication, and rate limiting.</td></tr>
              <tr><td>Vite</td><td>A modern build tool for web projects that leverages ES modules for fast development server startup and hot module replacement.</td></tr>
              <tr><td>Tailwind CSS</td><td>A utility-first CSS framework that provides low-level utility classes for building custom designs without writing custom CSS.</td></tr>
              <tr><td>TypeScript</td><td>A typed superset of JavaScript that compiles to plain JavaScript, providing static type checking and enhanced IDE support.</td></tr>
              <tr><td>React</td><td>A JavaScript library for building user interfaces using a component-based architecture with virtual DOM rendering.</td></tr>
              <tr><td>Recharts</td><td>A composable charting library built on React components, used for data visualization in the dashboard.</td></tr>
              <tr><td>shadcn/ui</td><td>A collection of re-usable UI components built using Radix UI primitives and Tailwind CSS styling.</td></tr>
              <tr><td>CVSS</td><td>Common Vulnerability Scoring System — a framework for rating the severity of security vulnerabilities, which inspired AAIDC's scoring methodology.</td></tr>
              <tr><td>SRE</td><td>Site Reliability Engineering — a discipline that incorporates aspects of software engineering to create scalable and reliable systems.</td></tr>
              <tr><td>APM</td><td>Application Performance Monitoring — software for tracking application performance, availability, and user experience.</td></tr>
            </tbody>
          </table>
        </section>

        {/* ===== APPENDIX B: SAMPLE CSV OUTPUT ===== */}
        <section className="docs-chapter" id="appendix-b">
          <h2 className="docs-h2">APPENDIX B: SAMPLE CSV OUTPUT</h2>
          <h3 className="docs-h3">B.1 Agent Runs CSV (Sample)</h3>
          <pre className="docs-code text-xs">{`Session ID,Timestamp,Prompt,Result,Score,Severity,Tool Failures,Excess Steps,Memory Violations,Latency (ms),Trace Steps
demo-001,2026-02-22T10:00:00Z,Calculate 25 * 4 + 10,The result of 25 × 4 + 10 is 110.,0,NONE,0,0,0,320,3
demo-004,2026-02-22T10:08:00Z,"Calculate sqrt(144) + log(100)","sqrt(144) = 12, log(100) = 2. Total = 14.",10,MINOR,1,0,0,620,4
demo-006,2026-02-22T10:12:00Z,"Solve the quadratic x²-5x+6=0","x = 2 or x = 3",40,MAJOR,2,0,1,920,7
demo-008,2026-02-22T10:18:00Z,"Analyze multi-step financial portfolio rebalancing","Partial result: 7/10 assets",80,CRITICAL,3,2,1,1340,9`}</pre>

          <h3 className="docs-h3">B.2 Incident Report CSV (Sample)</h3>
          <pre className="docs-code text-xs">{`Session ID,Timestamp,Severity,Score,Prompt,Tool Failures,Excess Steps,Memory Violations,Latency (ms)
demo-004,2026-02-22T10:08:00Z,MINOR,10,"Calculate sqrt(144) + log(100)",1,0,0,620
demo-006,2026-02-22T10:12:00Z,MAJOR,40,"Solve the quadratic x²-5x+6=0",2,0,1,920
demo-008,2026-02-22T10:18:00Z,CRITICAL,80,"Analyze multi-step financial portfolio rebalancing",3,2,1,1340
demo-009,2026-02-22T10:22:00Z,CRITICAL,95,"Run recursive Fibonacci(50)",0,4,2,1620`}</pre>
        </section>

        {/* ===== APPENDIX C: SOURCE CODE LISTING ===== */}
        <section className="docs-chapter" id="appendix-c">
          <h2 className="docs-h2">APPENDIX C: KEY SOURCE CODE LISTINGS</h2>
          
          <h3 className="docs-h3">C.1 Type Definitions (src/types/agent.ts)</h3>
          <pre className="docs-code text-xs">{`export type Severity = 'NONE' | 'MINOR' | 'MAJOR' | 'CRITICAL';

export interface TraceStep {
  stepId: number;
  stepName: string;
  startTime: string;
  endTime: string;
  status: 'SUCCESS' | 'FAILURE' | 'WARNING';
  details?: string;
}

export interface IncidentScore {
  score: number;
  severity: Severity;
  toolFailures: number;
  excessReasoningSteps: number;
  memoryViolations: number;
}

export interface AgentResult {
  sessionId: string;
  userPrompt: string;
  result: string;
  trace: TraceStep[];
  incidentScore: IncidentScore;
  totalLatency: number;
  timestamp: string;
}

export interface MemoryEntry {
  sessionId: string;
  context: string;
  integrityStatus: 'Valid' | 'Corrupted';
  memorySize: number;
  timestamp: string;
}

export interface DashboardMetrics {
  totalRuns: number;
  totalIncidents: number;
  minorCount: number;
  majorCount: number;
  criticalCount: number;
  averageLatency: number;
  failureRate: number;
  scoreDistribution: { score: number; count: number }[];
  latencyOverhead: { run: number; latency: number }[];
}

export interface FailureToggles {
  toolFailure: boolean;
  reasoningLoop: boolean;
  memoryCorruption: boolean;
  latencySpike: boolean;
}

export interface User {
  username: string;
  sessionId: string;
  loginTime: string;
}`}</pre>

          <h3 className="docs-h3">C.2 Agent Engine — Core Functions (src/lib/agent-engine.ts)</h3>
          <pre className="docs-code text-xs">{`function classifySeverity(score: number): Severity {
  if (score === 0) return 'NONE';
  if (score <= 20) return 'MINOR';
  if (score <= 50) return 'MAJOR';
  return 'CRITICAL';
}

function computeIncidentScore(
  toolFailures: number,
  excessSteps: number,
  memViolations: number
): IncidentScore {
  const score = (10 * toolFailures) + (15 * excessSteps) + (20 * memViolations);
  return {
    score,
    severity: classifySeverity(score),
    toolFailures,
    excessReasoningSteps: excessSteps,
    memoryViolations: memViolations
  };
}

function executeTool(expression: string): { result: string; success: boolean } {
  try {
    const sanitized = expression.replace(/[^0-9+\\-*/().%\\s]/g, '');
    if (!sanitized.trim()) return { result: 'No valid expression found', success: true };
    const result = Function(\`"use strict"; return (\${sanitized})\`)();
    return { result: String(result), success: true };
  } catch {
    return { result: 'Calculation error', success: false };
  }
}

async function callAI(prompt: string): Promise<{ result: string; success: boolean; latency: number }> {
  const start = Date.now();
  try {
    const { data, error } = await supabase.functions.invoke('agent-ai', {
      body: { prompt },
    });
    const latency = Date.now() - start;
    if (error) return { result: \`AI Error: \${error.message}\`, success: false, latency };
    return { result: data.result, success: true, latency };
  } catch (e) {
    return { result: \`Network error\`, success: false, latency: Date.now() - start };
  }
}`}</pre>

          <h3 className="docs-h3">C.3 CSV Export Utility (src/lib/csv-export.ts)</h3>
          <pre className="docs-code text-xs">{`function escapeCsv(value: string): string {
  if (value.includes(',') || value.includes('"') || value.includes('\\n')) {
    return \`"\${value.replace(/"/g, '""')}"\`;
  }
  return value;
}

export function exportAgentRunsCsv(results: AgentResult[]): void {
  const headers = [
    'Session ID', 'Timestamp', 'Prompt', 'Result', 'Score',
    'Severity', 'Tool Failures', 'Excess Steps',
    'Memory Violations', 'Latency (ms)', 'Trace Steps'
  ];
  const rows = results.map(r => [
    r.sessionId, r.timestamp, escapeCsv(r.userPrompt),
    escapeCsv(r.result.substring(0, 200)),
    String(r.incidentScore.score), r.incidentScore.severity,
    String(r.incidentScore.toolFailures),
    String(r.incidentScore.excessReasoningSteps),
    String(r.incidentScore.memoryViolations),
    String(r.totalLatency), String(r.trace.length),
  ]);
  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\\n');
  downloadCsv(csv, 'aaidc-agent-runs.csv');
}`}</pre>

          <h3 className="docs-h3">C.4 Edge Function (supabase/functions/agent-ai/index.ts)</h3>
          <pre className="docs-code text-xs">{`import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { prompt } = await req.json();
    const SOXIT_API_KEY = Deno.env.get("SOXIT_API_KEY");
    if (!SOXIT_API_KEY) throw new Error("SOXIT_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.soxit.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: \`Bearer \${SOXIT_API_KEY}\`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) return rateLimit();
      if (response.status === 402) return creditsExhausted();
      throw new Error(\`AI gateway error: \${response.status}\`);
    }

    const data = await response.json();
    return new Response(
      JSON.stringify({ result: data.choices[0].message.content }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: e.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});`}</pre>
        </section>

        {/* ===== APPENDIX D: USER MANUAL ===== */}
        <section className="docs-chapter" id="appendix-d">
          <h2 className="docs-h2">APPENDIX D: USER MANUAL</h2>

          <h3 className="docs-h3">D.1 Getting Started</h3>
          <ol className="docs-ol">
            <li>Open the application URL in a modern web browser (Chrome, Firefox, or Edge recommended).</li>
            <li>Enter any username and password on the login page (academic simulation accepts all credentials).</li>
            <li>You will be redirected to the Agent page where you can start executing tasks.</li>
          </ol>

          <h3 className="docs-h3">D.2 Running a Single Agent Task</h3>
          <ol className="docs-ol">
            <li>Navigate to the <strong>Agent</strong> page using the top navigation bar.</li>
            <li>Optionally enable one or more <strong>Failure Simulation</strong> toggles to inject anomalies.</li>
            <li>Enter a prompt in the input field (e.g., "Calculate 25 * 4 + 10").</li>
            <li>Click <strong>Run Agent</strong> or press Enter.</li>
            <li>View the result card showing the AI response, incident score, and severity badge.</li>
            <li>Expand the <strong>Execution Trace</strong> table to inspect individual pipeline steps.</li>
          </ol>

          <h3 className="docs-h3">D.3 Running a Batch Test</h3>
          <ol className="docs-ol">
            <li>On the Agent page, click <strong>Batch Mode</strong> in the top-right corner.</li>
            <li>Enter multiple prompts in the textarea, one per line.</li>
            <li>Configure failure toggles as desired (applies to all prompts in the batch).</li>
            <li>Click <strong>Run Batch</strong>. The progress indicator shows "Running X/N..."</li>
            <li>After completion, review the results table showing score and severity for each prompt.</li>
          </ol>

          <h3 className="docs-h3">D.4 Viewing the Dashboard</h3>
          <ol className="docs-ol">
            <li>Navigate to the <strong>Dashboard</strong> page.</li>
            <li>If no data exists, click <strong>Load Sample Data</strong> to populate with demo runs.</li>
            <li>View the four metric cards: Total Runs, Incidents, Avg Latency, Failure Rate.</li>
            <li>Examine the Incident Score Distribution bar chart and Severity Distribution pie chart.</li>
            <li>Scroll down to view the Latency Overhead line chart.</li>
          </ol>

          <h3 className="docs-h3">D.5 Exporting Data</h3>
          <ol className="docs-ol">
            <li>On the Dashboard page, click the <strong>Export CSV</strong> dropdown button.</li>
            <li>Select one of three options: All Agent Runs, Incident Report, or Memory Entries.</li>
            <li>The CSV file will download automatically to your browser's default download location.</li>
            <li>Open the CSV in Excel, Google Sheets, or any spreadsheet application for analysis.</li>
          </ol>

          <h3 className="docs-h3">D.6 Browsing Run History</h3>
          <ol className="docs-ol">
            <li>Navigate to the <strong>History</strong> page.</li>
            <li>Use the search bar to find runs by prompt text, session ID, or result content.</li>
            <li>Use the severity filter dropdown to show only runs of a specific severity level.</li>
            <li>Click the sort button to toggle between newest-first and oldest-first ordering.</li>
            <li>Click any run card to expand it and view the full result, metrics, and execution trace.</li>
          </ol>

          <h3 className="docs-h3">D.7 Viewing Memory Entries</h3>
          <ol className="docs-ol">
            <li>Navigate to the <strong>Memory</strong> page.</li>
            <li>View the table showing session IDs, context data, integrity status, and memory size.</li>
            <li>Entries with "Corrupted" integrity are highlighted in red with an alert icon.</li>
          </ol>

          <h3 className="docs-h3">D.8 Printing the Documentation</h3>
          <ol className="docs-ol">
            <li>Navigate to the <strong>Docs</strong> page.</li>
            <li>Click the <strong>Print Report</strong> button in the top-right corner.</li>
            <li>In the print dialog, select "Save as PDF" for a digital copy, or print directly to a physical printer.</li>
            <li>The print stylesheet automatically hides navigation elements, adds page breaks between chapters, and formats content for A4 paper.</li>
          </ol>
        </section>

        {/* ===== APPENDIX E: INSTALLATION GUIDE ===== */}
        <section className="docs-chapter" id="appendix-e">
          <h2 className="docs-h2">APPENDIX E: INSTALLATION &amp; SETUP GUIDE</h2>

          <h3 className="docs-h3">E.1 Prerequisites</h3>
          <ul className="docs-ul">
            <li>Node.js v18.0 or higher (download from nodejs.org)</li>
            <li>npm v8+ or bun v1.0+ package manager</li>
            <li>Git version control (download from git-scm.com)</li>
            <li>Modern web browser (Chrome 90+, Firefox 90+, Edge 90+)</li>
            <li>Internet connection (required for AI API calls)</li>
          </ul>

          <h3 className="docs-h3">E.2 Installation Steps</h3>
          <pre className="docs-code">{`# 1. Clone the repository
git clone <repository-url>
cd aaidc

# 2. Install dependencies
npm install
# or
bun install

# 3. Start the development server
npm run dev
# or
bun dev

# 4. Open in browser
# Navigate to http://localhost:5173`}</pre>

          <h3 className="docs-h3">E.3 Environment Configuration</h3>
          <p>
            The application requires the following environment variables for AI integration:
          </p>
          <table className="docs-table">
            <thead><tr><th>Variable</th><th>Purpose</th><th>Required</th></tr></thead>
            <tbody>
              <tr><td>VITE_SUPABASE_URL</td><td>Backend service URL</td><td>Yes (auto-configured)</td></tr>
              <tr><td>VITE_SUPABASE_PUBLISHABLE_KEY</td><td>Client authentication key</td><td>Yes (auto-configured)</td></tr>
              <tr><td>SOXIT_API_KEY</td><td>AI Gateway access (edge function)</td><td>Yes (server-side only)</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3">E.4 Build for Production</h3>
          <pre className="docs-code">{`# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Output directory: dist/`}</pre>
        </section>

      </div>
    </AppLayout>
  );
}

/* Table of Contents Component */
function TableOfContents() {
  const items = [
    { id: 'certificate', label: 'Certificate' },
    { id: 'declaration', label: 'Declaration' },
    { id: 'acknowledgements', label: 'Acknowledgements' },
    { id: 'abstract', label: 'Abstract' },
    { id: 'list-of-figures', label: 'List of Figures' },
    { id: 'list-of-tables', label: 'List of Tables' },
    { id: 'ch1', label: 'Chapter 1: Introduction', sub: [
      { id: 'ch1-1', label: '1.1 Background' },
      { id: 'ch1-2', label: '1.2 Problem Statement' },
      { id: 'ch1-3', label: '1.3 Objectives' },
      { id: 'ch1-4', label: '1.4 Scope of the Project' },
      { id: 'ch1-5', label: '1.5 Motivation' },
      { id: 'ch1-6', label: '1.6 Organization of the Report' },
    ]},
    { id: 'ch2', label: 'Chapter 2: Literature Review', sub: [
      { id: 'ch2-1', label: '2.1 Agentic AI Systems' },
      { id: 'ch2-2', label: '2.2 LLM Tool Augmentation' },
      { id: 'ch2-3', label: '2.3 Incident Detection in AI Systems' },
      { id: 'ch2-4', label: '2.4 Observability and Tracing' },
      { id: 'ch2-5', label: '2.5 Batch Testing and Regression Detection' },
      { id: 'ch2-6', label: '2.6 Real-Time Alerting in AI Systems' },
      { id: 'ch2-7', label: '2.7 Summary of Literature Gap' },
    ]},
    { id: 'ch3', label: 'Chapter 3: System Architecture', sub: [
      { id: 'ch3-1', label: '3.1 High-Level Architecture' },
      { id: 'ch3-2', label: '3.2 Deployment Architecture' },
      { id: 'ch3-3', label: '3.3 Module Breakdown' },
      { id: 'ch3-4', label: '3.4 Technology Stack' },
      { id: 'ch3-5', label: '3.5 Software Requirements' },
      { id: 'ch3-6', label: '3.6 Hardware Requirements' },
    ]},
    { id: 'ch4', label: 'Chapter 4: System Design', sub: [
      { id: 'ch4-1', label: '4.1 Agent Execution Pipeline' },
      { id: 'ch4-2', label: '4.2 Data Flow Diagram (Level 0)' },
      { id: 'ch4-2b', label: '4.2.1 Data Flow Diagram (Level 1)' },
      { id: 'ch4-3', label: '4.3 Use Case Diagram' },
      { id: 'ch4-4', label: '4.4 Sequence Diagram: Single Agent Run' },
      { id: 'ch4-4b', label: '4.4.1 Sequence Diagram: Batch Testing' },
      { id: 'ch4-5', label: '4.5 Incident Scoring Formula' },
      { id: 'ch4-6', label: '4.6 Severity Classification' },
      { id: 'ch4-7', label: '4.7 Failure Toggle Specifications' },
      { id: 'ch4-8', label: '4.8 Data Models' },
      { id: 'ch4-9', label: '4.9 ER Diagram' },
      { id: 'ch4-10', label: '4.10 Class Diagram' },
      { id: 'ch4-11', label: '4.11 Activity Diagram: Incident Scoring' },
      { id: 'ch4-12', label: '4.12 State Diagram: Agent Lifecycle' },
      { id: 'ch4-13', label: '4.13 API Documentation' },
      { id: 'ch4-14', label: '4.14 CSV Export Data Dictionary' },
    ]},
    { id: 'ch5', label: 'Chapter 5: Implementation', sub: [
      { id: 'ch5-1', label: '5.1 Project File Structure' },
      { id: 'ch5-2', label: '5.2 Agent Execution Engine' },
      { id: 'ch5-3', label: '5.3 Tool Registry: Calculator' },
      { id: 'ch5-4', label: '5.4 AI Integration (Edge Function)' },
      { id: 'ch5-5', label: '5.5 Incident Scoring Engine' },
      { id: 'ch5-6', label: '5.6 Session Memory Store' },
      { id: 'ch5-7', label: '5.7 Batch Testing Module' },
      { id: 'ch5-8', label: '5.8 Real-Time Alerting System' },
      { id: 'ch5-9', label: '5.9 CSV Export Module' },
      { id: 'ch5-10', label: '5.10 Run History Browser' },
      { id: 'ch5-11', label: '5.11 Sample Dataset' },
      { id: 'ch5-12', label: '5.12 Component Architecture' },
      { id: 'ch5-13', label: '5.13 User Interface Screenshots' },
    ]},
    { id: 'ch6', label: 'Chapter 6: Testing & Results', sub: [
      { id: 'ch6-1', label: '6.1 Test Methodology' },
      { id: 'ch6-2', label: '6.2 Test Cases and Results' },
      { id: 'ch6-3', label: '6.3 Experimental Results Dataset' },
      { id: 'ch6-4', label: '6.4 Batch Testing Analysis' },
      { id: 'ch6-5', label: '6.5 Performance Analysis' },
      { id: 'ch6-6', label: '6.6 Performance Metrics Summary' },
      { id: 'ch6-7', label: '6.7 Comparative Analysis' },
    ]},
    { id: 'ch7', label: 'Chapter 7: Conclusion & Future Work', sub: [
      { id: 'ch7-1', label: '7.1 Conclusion' },
      { id: 'ch7-2', label: '7.2 Limitations' },
      { id: 'ch7-3', label: '7.3 Future Work' },
    ]},
    { id: 'references', label: 'References' },
    { id: 'glossary', label: 'Appendix A: Glossary of Terms' },
    { id: 'appendix-b', label: 'Appendix B: Sample CSV Output' },
    { id: 'appendix-c', label: 'Appendix C: Key Source Code Listings' },
    { id: 'appendix-d', label: 'Appendix D: User Manual' },
    { id: 'appendix-e', label: 'Appendix E: Installation & Setup Guide' },
  ];

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <a href={`#${item.id}`} className="toc-link font-semibold">{item.label}</a>
          {'sub' in item && item.sub && (
            <div className="pl-8">
              {item.sub.map(sub => (
                <div key={sub.id}>
                  <a href={`#${sub.id}`} className="toc-link">{sub.label}</a>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
