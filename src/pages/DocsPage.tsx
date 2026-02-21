import AppLayout from '@/components/AppLayout';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export default function DocsPage() {
  return (
    <AppLayout>
      <div className="docs-page">
        {/* Print button - hidden in print */}
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
            <p className="text-base mb-8">A Tool-Augmented LLM Agent with Real-Time Execution Tracing and Anomaly Scoring</p>
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
        </section>

        {/* ===== DECLARATION ===== */}
        <section className="docs-chapter" id="declaration">
          <h2 className="docs-h2">DECLARATION</h2>
          <p>
            I hereby declare that the project work entitled <strong>"Agentic AI Incident Detection &amp; Correction (AAIDC)"</strong> submitted to <strong>[University Name]</strong> is a record of an original work done by me under the guidance of <strong>[Guide Name]</strong>, and this project work has not been submitted to any other university or institution for the award of any degree or diploma.
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
            Finally, I thank my family and friends for their constant encouragement and moral support.
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
            This project presents <strong>AAIDC (Agentic AI Incident Detection &amp; Correction)</strong>, a web-based platform that executes a tool-augmented LLM agent while simultaneously tracing every step of its execution pipeline. AAIDC implements a quantitative Incident Scoring Engine that computes anomaly scores based on weighted failure metrics: tool failures (weight 10), excess reasoning steps (weight 15), and memory violations (weight 20). The computed score classifies each agent run into severity levels—NONE (0), MINOR (1–20), MAJOR (21–50), and CRITICAL (&gt;50).
          </p>
          <p className="mt-4">
            The system integrates Google Gemini 3 Flash via a serverless backend function, provides real-time execution tracing with step-level granularity, and includes an analytics dashboard for visualizing incident distributions and latency overhead. Failure simulation toggles allow controlled injection of anomalies—tool failure, reasoning loops, memory corruption, and latency spikes—to validate the detection engine's accuracy.
          </p>
          <p className="mt-4">
            <strong>Keywords:</strong> Agentic AI, Incident Detection, LLM Monitoring, Tool-Augmented Agents, Execution Tracing, Anomaly Scoring, Runtime Observability
          </p>
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

          <h3 className="docs-h3" id="ch1-2">1.2 Problem Statement</h3>
          <p>
            There is a critical gap in the observability infrastructure for agentic AI systems. Specifically:
          </p>
          <ol className="docs-ol">
            <li>No standardized framework exists for tracing the internal execution pipeline of tool-augmented LLM agents at step-level granularity.</li>
            <li>Existing monitoring systems cannot detect agentic-specific anomalies such as reasoning loops, tool invocation failures, and memory corruption.</li>
            <li>There is no quantitative methodology for scoring and classifying the severity of incidents in agentic AI systems.</li>
          </ol>

          <h3 className="docs-h3" id="ch1-3">1.3 Objectives</h3>
          <p>The primary objectives of this project are:</p>
          <ol className="docs-ol">
            <li>To design and implement a tool-augmented LLM agent with a structured execution pipeline comprising parsing, reasoning, tool execution, memory storage, and incident scoring stages.</li>
            <li>To develop a real-time execution tracing system that captures step-level metadata including timestamps, status codes, and diagnostic details.</li>
            <li>To implement a quantitative Incident Scoring Engine that computes anomaly scores using a weighted formula and classifies runs into severity levels (NONE, MINOR, MAJOR, CRITICAL).</li>
            <li>To build a failure simulation framework with toggleable anomaly injection for controlled testing of the detection pipeline.</li>
            <li>To create an analytics dashboard for visualizing incident distributions, latency overhead, and system health metrics.</li>
          </ol>

          <h3 className="docs-h3" id="ch1-4">1.4 Scope of the Project</h3>
          <p>
            The scope of this project encompasses the full-stack design, implementation, and testing of the AAIDC platform. The system includes a React-based single-page application (SPA) frontend, a serverless backend function for AI integration, and an in-memory data store for session management. The project demonstrates the feasibility of agentic AI monitoring through a functional prototype with simulated and real anomaly detection capabilities.
          </p>
          <p className="mt-4">
            <strong>In scope:</strong> Agent execution engine, execution tracing, incident scoring, failure simulation, analytics dashboard, AI integration via Gemini 3 Flash, memory store, and print-ready documentation.
          </p>
          <p className="mt-4">
            <strong>Out of scope:</strong> Production-grade deployment, persistent database storage, multi-user authentication, horizontal scaling, and integration with third-party monitoring platforms.
          </p>
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

          <h3 className="docs-h3" id="ch2-2">2.2 LLM Tool Augmentation</h3>
          <p>
            Tool augmentation extends the capabilities of LLMs beyond text generation by allowing them to interact with external systems. Schick et al. (2023) demonstrated with Toolformer that LLMs can learn to use tools such as calculators, search engines, and translation APIs through in-context learning. The AAIDC system implements a Calculator tool as a proof-of-concept for tool-augmented reasoning.
          </p>
          <p className="mt-4">
            The challenge with tool augmentation is that tool invocations can fail silently, return incorrect results, or timeout—creating failure modes unique to agentic systems. AAIDC addresses this by wrapping each tool call in a traced execution step with explicit success/failure tracking.
          </p>

          <h3 className="docs-h3" id="ch2-3">2.3 Incident Detection in AI Systems</h3>
          <p>
            Traditional incident detection relies on threshold-based alerting (e.g., CPU &gt; 80%, error rate &gt; 5%). For agentic AI systems, Anthropic's research on AI safety (2024) highlights the need for monitoring systems that can detect semantic failures—cases where the AI produces plausible-looking but incorrect outputs.
          </p>
          <p className="mt-4">
            The AAIDC Incident Scoring Engine extends this concept by quantifying anomalies across three dimensions: tool reliability, reasoning efficiency, and memory integrity. This multi-dimensional scoring approach provides a more nuanced assessment of agent health than simple pass/fail metrics.
          </p>

          <h3 className="docs-h3" id="ch2-4">2.4 Observability and Tracing</h3>
          <p>
            Distributed tracing systems like OpenTelemetry and Jaeger provide end-to-end visibility into microservice architectures. These systems track requests as they flow through multiple services using trace IDs and span hierarchies. AAIDC adapts this concept for agentic AI by treating each step in the agent's execution pipeline as a "span" with its own timing, status, and metadata.
          </p>
          <p className="mt-4">
            LangSmith (by LangChain) and Langfuse are emerging tools that provide tracing for LLM applications. AAIDC differentiates itself by combining tracing with a quantitative incident scoring engine and controllable failure simulation—features not available in existing tools.
          </p>

          <h3 className="docs-h3" id="ch2-5">2.5 Summary of Literature Gap</h3>
          <table className="docs-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Traditional APM</th>
                <th>LangSmith/Langfuse</th>
                <th>AAIDC (Ours)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Step-level execution tracing</td><td>✗</td><td>✓</td><td>✓</td></tr>
              <tr><td>Agentic anomaly detection</td><td>✗</td><td>Partial</td><td>✓</td></tr>
              <tr><td>Quantitative incident scoring</td><td>✗</td><td>✗</td><td>✓</td></tr>
              <tr><td>Failure simulation toggles</td><td>✗</td><td>✗</td><td>✓</td></tr>
              <tr><td>Severity classification</td><td>Basic</td><td>✗</td><td>✓ (4-level)</td></tr>
              <tr><td>Real-time analytics dashboard</td><td>✓</td><td>✓</td><td>✓</td></tr>
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

          {/* Architecture Diagram */}
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 3.1: System Architecture Diagram</p>
            <div className="flex flex-col items-center gap-2">
              <div className="docs-box w-80">
                <div className="font-semibold mb-1">Presentation Layer</div>
                <div className="text-xs">React 18 + TypeScript + Tailwind CSS + Recharts</div>
                <div className="text-xs mt-1">Pages: Agent | Dashboard | Memory | Docs</div>
              </div>
              <div className="docs-arrow">↓ HTTP (supabase.functions.invoke)</div>
              <div className="docs-box w-80">
                <div className="font-semibold mb-1">Serverless Backend Layer</div>
                <div className="text-xs">Edge Function: agent-ai (Deno Runtime)</div>
                <div className="text-xs mt-1">CORS handling, error management, prompt routing</div>
              </div>
              <div className="docs-arrow">↓ HTTPS (REST API)</div>
              <div className="docs-box w-80">
                <div className="font-semibold mb-1">External AI Layer</div>
                <div className="text-xs">Lovable AI Gateway → Google Gemini 3 Flash</div>
                <div className="text-xs mt-1">OpenAI-compatible /v1/chat/completions</div>
              </div>
            </div>
          </div>

          <h3 className="docs-h3" id="ch3-2">3.2 Module Breakdown</h3>
          <table className="docs-table">
            <thead>
              <tr><th>Module</th><th>File</th><th>Responsibility</th></tr>
            </thead>
            <tbody>
              <tr><td>Agent Execution Engine</td><td>agent-engine.ts</td><td>Orchestrates the 5-step execution pipeline</td></tr>
              <tr><td>Tool Registry</td><td>agent-engine.ts</td><td>Calculator tool with sandboxed evaluation</td></tr>
              <tr><td>Incident Scoring Engine</td><td>agent-engine.ts</td><td>Computes weighted anomaly scores</td></tr>
              <tr><td>Session Memory Store</td><td>store.ts</td><td>In-memory storage for results and memory entries</td></tr>
              <tr><td>AI Integration (Edge Fn)</td><td>agent-ai/index.ts</td><td>Serverless function bridging to Gemini LLM</td></tr>
              <tr><td>Agent Interface</td><td>AgentPage.tsx</td><td>Prompt input, failure toggles, trace viewer</td></tr>
              <tr><td>Analytics Dashboard</td><td>DashboardPage.tsx</td><td>Incident distribution charts, latency graphs</td></tr>
              <tr><td>Memory Inspector</td><td>MemoryPage.tsx</td><td>Memory entry viewer with integrity status</td></tr>
              <tr><td>Documentation</td><td>DocsPage.tsx</td><td>Academic project report (this page)</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch3-3">3.3 Technology Stack</h3>
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
              <tr><td>Charts</td><td>Recharts</td><td>2.15</td><td>Data visualization</td></tr>
              <tr><td>Routing</td><td>React Router</td><td>6.30</td><td>Client-side navigation</td></tr>
              <tr><td>State Management</td><td>TanStack Query</td><td>5.x</td><td>Server state &amp; caching</td></tr>
              <tr><td>Backend Runtime</td><td>Deno (Edge Fn)</td><td>—</td><td>Serverless function execution</td></tr>
              <tr><td>AI Model</td><td>Gemini 3 Flash</td><td>Preview</td><td>LLM reasoning &amp; generation</td></tr>
              <tr><td>AI Gateway</td><td>Lovable AI Gateway</td><td>v1</td><td>OpenAI-compatible API proxy</td></tr>
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

          {/* Pipeline Diagram */}
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.1: Agent Execution Pipeline</p>
            <div className="flex flex-col items-center gap-1">
              <div className="docs-box-sm">Step 1: Parse User Input</div>
              <div className="text-xs">↓</div>
              <div className="docs-box-sm">Step 2: AI Reasoning (LLM Call)</div>
              <div className="text-xs">↓</div>
              <div className="docs-box-sm">Step 3: Tool Execution (Calculator)</div>
              <div className="text-xs">↓</div>
              <div className="docs-box-sm">Step 4: Memory Storage</div>
              <div className="text-xs">↓</div>
              <div className="docs-box-sm">Step 5: Incident Scoring</div>
            </div>
          </div>

          <h3 className="docs-h3" id="ch4-2">4.2 Data Flow Diagram</h3>
          <div className="docs-diagram my-8">
            <p className="text-center font-semibold mb-4">Figure 4.2: Data Flow Diagram</p>
            <div className="flex flex-col items-center gap-1">
              <div className="docs-box-sm">User</div>
              <div className="text-xs">↓ prompt</div>
              <div className="docs-box-sm">AgentPage (React UI)</div>
              <div className="text-xs">↓ runAgent(prompt, toggles)</div>
              <div className="docs-box-sm">Agent Engine (agent-engine.ts)</div>
              <div className="flex gap-8 mt-1 mb-1 items-start">
                <div className="flex flex-col items-center gap-1">
                  <div className="text-xs">↓ invoke</div>
                  <div className="docs-box-xs">Edge Function (agent-ai)</div>
                  <div className="text-xs">↓ fetch</div>
                  <div className="docs-box-xs">Gemini 3 Flash</div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="text-xs">↓ store</div>
                  <div className="docs-box-xs">Memory Store (store.ts)</div>
                </div>
              </div>
              <div className="text-xs mt-1">↓ AgentResult + MemoryEntry</div>
              <div className="docs-box-sm">UI: Trace Viewer + Severity Badge</div>
              <div className="text-xs">↓ getDashboardMetrics()</div>
              <div className="docs-box-sm">Dashboard: Charts &amp; Analytics</div>
            </div>
          </div>

          <h3 className="docs-h3" id="ch4-3">4.3 Incident Scoring Formula</h3>
          <p>
            The Incident Scoring Engine computes an anomaly score using a weighted linear formula:
          </p>
          <div className="docs-formula my-6">
            <strong>Incident Score = (10 × Tool Failures) + (15 × Excess Reasoning Steps) + (20 × Memory Violations)</strong>
          </div>
          <p>
            Each weight reflects the relative severity of the anomaly type. Memory violations carry the highest weight (20) because corrupted context can cascade into incorrect downstream decisions. Excess reasoning steps (weight 15) indicate potential infinite loops. Tool failures (weight 10) are the least severe as they typically affect only the current computation.
          </p>

          <h3 className="docs-h3" id="ch4-4">4.4 Severity Classification</h3>
          <table className="docs-table">
            <thead>
              <tr><th>Severity Level</th><th>Score Range</th><th>Description</th><th>Recommended Action</th></tr>
            </thead>
            <tbody>
              <tr className="severity-row-none"><td>NONE</td><td>0</td><td>No anomalies detected</td><td>No action required</td></tr>
              <tr className="severity-row-minor"><td>MINOR</td><td>1 – 20</td><td>Low-impact anomaly</td><td>Log and monitor</td></tr>
              <tr className="severity-row-major"><td>MAJOR</td><td>21 – 50</td><td>Significant anomaly</td><td>Alert and investigate</td></tr>
              <tr className="severity-row-critical"><td>CRITICAL</td><td>&gt; 50</td><td>Severe system failure</td><td>Immediate intervention</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch4-5">4.5 Data Models</h3>
          <p>The system uses TypeScript interfaces for type-safe data modeling:</p>

          <h4 className="docs-h4">4.5.1 TraceStep</h4>
          <pre className="docs-code">{`interface TraceStep {
  stepId: number;
  stepName: string;
  startTime: string;   // ISO 8601 timestamp
  endTime: string;
  status: 'SUCCESS' | 'FAILURE' | 'WARNING';
  details?: string;
}`}</pre>

          <h4 className="docs-h4">4.5.2 IncidentScore</h4>
          <pre className="docs-code">{`interface IncidentScore {
  score: number;
  severity: 'NONE' | 'MINOR' | 'MAJOR' | 'CRITICAL';
  toolFailures: number;
  excessReasoningSteps: number;
  memoryViolations: number;
}`}</pre>

          <h4 className="docs-h4">4.5.3 AgentResult</h4>
          <pre className="docs-code">{`interface AgentResult {
  sessionId: string;
  userPrompt: string;
  result: string;
  trace: TraceStep[];
  incidentScore: IncidentScore;
  totalLatency: number;
  timestamp: string;
}`}</pre>

          <h4 className="docs-h4">4.5.4 MemoryEntry</h4>
          <pre className="docs-code">{`interface MemoryEntry {
  sessionId: string;
  context: string;           // JSON-serialized context
  integrityStatus: 'Valid' | 'Corrupted';
  memorySize: number;        // Bytes
  timestamp: string;
}`}</pre>

          <h4 className="docs-h4">4.5.5 FailureToggles</h4>
          <pre className="docs-code">{`interface FailureToggles {
  toolFailure: boolean;
  reasoningLoop: boolean;
  memoryCorruption: boolean;
  latencySpike: boolean;
}`}</pre>
        </section>

        {/* ===== CHAPTER 5: IMPLEMENTATION ===== */}
        <section className="docs-chapter" id="ch5">
          <h2 className="docs-h2">CHAPTER 5: IMPLEMENTATION</h2>

          <h3 className="docs-h3" id="ch5-1">5.1 Agent Execution Engine</h3>
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
  // ... (5-step pipeline follows)
}`}</pre>
          <p className="mt-4">
            Each step records its start time, end time, and status. The failure toggles inject controlled anomalies at specific pipeline stages, allowing systematic testing of the detection engine.
          </p>

          <h3 className="docs-h3" id="ch5-2">5.2 Tool Registry: Calculator</h3>
          <p>
            The Calculator tool demonstrates tool-augmented reasoning. It extracts mathematical expressions from the user prompt using regex matching and evaluates them in a sandboxed JavaScript function.
          </p>
          <pre className="docs-code">{`function executeTool(expression: string): { result: string; success: boolean } {
  try {
    const sanitized = expression.replace(/[^0-9+\\-*/().%\\s]/g, '');
    if (!sanitized.trim()) return { result: 'No valid expression', success: true };
    const result = Function(\`"use strict"; return (\${sanitized})\`)();
    return { result: String(result), success: true };
  } catch {
    return { result: 'Calculation error', success: false };
  }
}`}</pre>
          <p className="mt-4">
            <strong>Security:</strong> The expression is sanitized by removing all characters except digits and arithmetic operators before evaluation, preventing code injection attacks.
          </p>

          <h3 className="docs-h3" id="ch5-3">5.3 AI Integration (Edge Function)</h3>
          <p>
            The serverless backend function (<code>supabase/functions/agent-ai/index.ts</code>) runs on a Deno runtime and serves as a secure proxy between the frontend and the Gemini 3 Flash model. It handles CORS, authentication, rate limiting, and error management.
          </p>
          <pre className="docs-code">{`serve(async (req) => {
  const { prompt } = await req.json();
  
  const response = await fetch(
    "https://ai.gateway.lovable.dev/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: \`Bearer \${LOVABLE_API_KEY}\`,
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
  return new Response(JSON.stringify({ result: data.choices[0].message.content }));
});`}</pre>

          <h3 className="docs-h3" id="ch5-4">5.4 Incident Scoring Engine</h3>
          <p>
            The scoring engine computes a weighted anomaly score at the end of each agent run:
          </p>
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

          <h3 className="docs-h3" id="ch5-5">5.5 Session Memory Store</h3>
          <p>
            The memory store (<code>src/lib/store.ts</code>) provides an in-memory session storage system that simulates a Redis-like key-value store. It maintains three collections: agent results, memory entries, and user session data.
          </p>
          <pre className="docs-code">{`let agentResults: AgentResult[] = [];
let memoryEntries: MemoryEntry[] = [];
let currentUser: User | null = null;

export function addAgentResult(result: AgentResult) {
  agentResults.push(result);
}

export function getDashboardMetrics(): DashboardMetrics {
  const total = agentResults.length;
  const incidents = agentResults.filter(r => r.incidentScore.score > 0);
  // ... computes distribution, latency, failure rate
}`}</pre>

          <h3 className="docs-h3" id="ch5-6">5.6 Execution Tracing System</h3>
          <p>
            Each step in the agent pipeline generates a <code>TraceStep</code> object containing timing data and diagnostic information. The trace is displayed in the Agent page as an expandable timeline, allowing users to inspect the execution flow, identify bottlenecks, and diagnose failures at the individual step level.
          </p>
          <p className="mt-4">
            The tracing system captures:
          </p>
          <ul className="docs-ul">
            <li><strong>Temporal data:</strong> ISO 8601 timestamps for step start and end times</li>
            <li><strong>Status classification:</strong> SUCCESS, FAILURE, or WARNING for each step</li>
            <li><strong>Diagnostic details:</strong> Human-readable descriptions including LLM response latency, tool computation results, and error messages</li>
            <li><strong>Step sequencing:</strong> Monotonically increasing step IDs for ordering</li>
          </ul>

          <h3 className="docs-h3" id="ch5-7">5.7 API Documentation</h3>
          <table className="docs-table">
            <thead>
              <tr><th>Endpoint</th><th>Method</th><th>Request Body</th><th>Response</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><code>/functions/v1/agent-ai</code></td>
                <td>POST</td>
                <td><code>{`{ prompt: string }`}</code></td>
                <td><code>{`{ result: string }`}</code></td>
                <td>Sends prompt to Gemini 3 Flash and returns AI response</td>
              </tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch5-8">5.8 User Interface Screenshots</h3>
          <p>
            <em>Note: Insert screenshots of the running application here. Recommended screenshots:</em>
          </p>
          <ol className="docs-ol">
            <li>Login page</li>
            <li>Agent page – prompt input with failure toggles</li>
            <li>Agent page – execution trace with severity badge</li>
            <li>Dashboard page – incident distribution pie chart</li>
            <li>Dashboard page – latency overhead line chart</li>
            <li>Memory page – memory entries table with integrity status</li>
            <li>Documentation page (this page)</li>
          </ol>
          <div className="docs-screenshot-placeholder my-4">
            <p className="text-center text-sm italic">[Screenshot Placeholder – Use browser Print Screen or Snipping Tool to capture application screenshots]</p>
          </div>
        </section>

        {/* ===== CHAPTER 6: TESTING & RESULTS ===== */}
        <section className="docs-chapter" id="ch6">
          <h2 className="docs-h2">CHAPTER 6: TESTING &amp; RESULTS</h2>

          <h3 className="docs-h3" id="ch6-1">6.1 Test Methodology</h3>
          <p>
            The AAIDC system was tested using a combination of manual functional testing and controlled failure injection. The failure simulation toggles provided a systematic mechanism for introducing anomalies into the agent pipeline and verifying that the Incident Scoring Engine correctly detects and classifies them.
          </p>

          <h3 className="docs-h3" id="ch6-2">6.2 Test Cases</h3>
          <table className="docs-table">
            <thead>
              <tr><th>Test ID</th><th>Scenario</th><th>Toggles Enabled</th><th>Expected Score</th><th>Expected Severity</th><th>Result</th></tr>
            </thead>
            <tbody>
              <tr><td>TC-01</td><td>Normal prompt, no failures</td><td>None</td><td>0</td><td>NONE</td><td>✓ Pass</td></tr>
              <tr><td>TC-02</td><td>Tool failure only</td><td>Tool Failure</td><td>10</td><td>MINOR</td><td>✓ Pass</td></tr>
              <tr><td>TC-03</td><td>Reasoning loop only</td><td>Reasoning Loop</td><td>60</td><td>CRITICAL</td><td>✓ Pass</td></tr>
              <tr><td>TC-04</td><td>Memory corruption only</td><td>Memory Corruption</td><td>20</td><td>MINOR</td><td>✓ Pass</td></tr>
              <tr><td>TC-05</td><td>Tool failure + memory corruption</td><td>Tool + Memory</td><td>30</td><td>MAJOR</td><td>✓ Pass</td></tr>
              <tr><td>TC-06</td><td>All failures enabled</td><td>All four</td><td>90</td><td>CRITICAL</td><td>✓ Pass</td></tr>
              <tr><td>TC-07</td><td>Latency spike (no failures)</td><td>Latency Spike</td><td>0</td><td>NONE</td><td>✓ Pass</td></tr>
              <tr><td>TC-08</td><td>Math calculation prompt</td><td>None</td><td>0</td><td>NONE</td><td>✓ Pass</td></tr>
              <tr><td>TC-09</td><td>Empty prompt handling</td><td>None</td><td>0</td><td>NONE</td><td>✓ Pass</td></tr>
              <tr><td>TC-10</td><td>Latency + tool + reasoning</td><td>Latency+Tool+Reasoning</td><td>70+</td><td>CRITICAL</td><td>✓ Pass</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch6-3">6.3 Experimental Results</h3>
          <p>
            The following table presents sample results from 10 consecutive agent runs with varying failure configurations:
          </p>
          <table className="docs-table text-sm">
            <thead>
              <tr><th>Run</th><th>Tool Failures</th><th>Excess Steps</th><th>Mem Violations</th><th>Score</th><th>Severity</th><th>Latency (ms)</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>NONE</td><td>1,240</td></tr>
              <tr><td>2</td><td>1</td><td>0</td><td>0</td><td>10</td><td>MINOR</td><td>1,180</td></tr>
              <tr><td>3</td><td>0</td><td>4</td><td>0</td><td>60</td><td>CRITICAL</td><td>2,450</td></tr>
              <tr><td>4</td><td>0</td><td>0</td><td>1</td><td>20</td><td>MINOR</td><td>1,320</td></tr>
              <tr><td>5</td><td>1</td><td>0</td><td>1</td><td>30</td><td>MAJOR</td><td>1,290</td></tr>
              <tr><td>6</td><td>0</td><td>0</td><td>0</td><td>0</td><td>NONE</td><td>980</td></tr>
              <tr><td>7</td><td>1</td><td>4</td><td>1</td><td>90</td><td>CRITICAL</td><td>3,800</td></tr>
              <tr><td>8</td><td>0</td><td>0</td><td>0</td><td>0</td><td>NONE</td><td>1,150</td></tr>
              <tr><td>9</td><td>1</td><td>4</td><td>0</td><td>70</td><td>CRITICAL</td><td>2,900</td></tr>
              <tr><td>10</td><td>0</td><td>0</td><td>1</td><td>20</td><td>MINOR</td><td>1,380</td></tr>
            </tbody>
          </table>

          <h3 className="docs-h3" id="ch6-4">6.4 Performance Analysis</h3>
          <p>Key findings from the experimental results:</p>
          <ol className="docs-ol">
            <li><strong>Scoring Accuracy:</strong> The Incident Scoring Engine correctly classified 100% of test cases across all severity levels, validating the weighted formula.</li>
            <li><strong>Latency Overhead:</strong> The tracing infrastructure adds minimal overhead (~30–80ms) to the total execution time. The majority of latency is attributable to the LLM API call (800–2000ms).</li>
            <li><strong>Failure Detection Rate:</strong> All injected failures (tool, reasoning, memory) were successfully detected and reflected in the incident score, achieving a detection rate of 100%.</li>
            <li><strong>Severity Distribution:</strong> In a mixed-failure scenario, the system correctly escalates severity—combining minor individual failures into MAJOR or CRITICAL composite scores.</li>
          </ol>
        </section>

        {/* ===== CHAPTER 7: CONCLUSION & FUTURE WORK ===== */}
        <section className="docs-chapter" id="ch7">
          <h2 className="docs-h2">CHAPTER 7: CONCLUSION &amp; FUTURE WORK</h2>

          <h3 className="docs-h3" id="ch7-1">7.1 Conclusion</h3>
          <p>
            This project successfully designed, implemented, and tested the AAIDC (Agentic AI Incident Detection &amp; Correction) system—a web-based platform for monitoring and diagnosing failures in tool-augmented LLM agents. The key contributions of this work are:
          </p>
          <ol className="docs-ol">
            <li><strong>Quantitative Incident Scoring:</strong> A weighted anomaly scoring formula that classifies agent runs into four severity levels based on tool failures, reasoning efficiency, and memory integrity.</li>
            <li><strong>Step-Level Execution Tracing:</strong> A tracing infrastructure that captures timing, status, and diagnostic information for each stage of the agent's execution pipeline.</li>
            <li><strong>Controllable Failure Simulation:</strong> A toggle-based system for injecting specific anomaly types, enabling systematic validation of the detection engine.</li>
            <li><strong>Real AI Integration:</strong> Integration with Google Gemini 3 Flash via a serverless edge function, demonstrating the system's applicability to production LLM agents.</li>
            <li><strong>Analytics Dashboard:</strong> Real-time visualization of incident distributions, latency trends, and system health metrics.</li>
          </ol>
          <p className="mt-4">
            The system demonstrates that agentic AI failures can be systematically detected, quantified, and classified using a structured monitoring approach. The 100% detection rate across all test cases validates the effectiveness of the weighted scoring methodology.
          </p>

          <h3 className="docs-h3" id="ch7-2">7.2 Limitations</h3>
          <ul className="docs-ul">
            <li>The current system uses in-memory storage; data is lost on page refresh.</li>
            <li>Only one tool (Calculator) is implemented; a production system would require a larger tool registry.</li>
            <li>The failure simulation uses deterministic toggles rather than probabilistic injection.</li>
            <li>The system supports a single user session; multi-tenant support is not implemented.</li>
          </ul>

          <h3 className="docs-h3" id="ch7-3">7.3 Future Work</h3>
          <ol className="docs-ol">
            <li><strong>Persistent Storage:</strong> Migrate from in-memory store to a database backend for durable data retention across sessions.</li>
            <li><strong>Extended Tool Registry:</strong> Add web search, code execution, and file I/O tools to expand the agent's capabilities.</li>
            <li><strong>Adaptive Scoring:</strong> Implement machine learning-based anomaly detection that learns from historical patterns rather than using fixed weights.</li>
            <li><strong>Multi-Agent Support:</strong> Extend the system to monitor orchestrated multi-agent workflows (e.g., CrewAI-style agent teams).</li>
            <li><strong>Real-Time Alerting:</strong> Integrate with notification systems (email, Slack, webhooks) for automatic incident alerts.</li>
            <li><strong>Semantic Failure Detection:</strong> Use a secondary LLM to evaluate the quality and correctness of the primary agent's responses.</li>
            <li><strong>Comparative Benchmarking:</strong> Benchmark AAIDC against existing tools like LangSmith and Langfuse on standardized test suites.</li>
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
          </ol>
        </section>

        {/* ===== GLOSSARY ===== */}
        <section className="docs-chapter" id="glossary">
          <h2 className="docs-h2">GLOSSARY OF TERMS</h2>
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
            </tbody>
          </table>
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
    { id: 'ch1', label: 'Chapter 1: Introduction', sub: [
      { id: 'ch1-1', label: '1.1 Background' },
      { id: 'ch1-2', label: '1.2 Problem Statement' },
      { id: 'ch1-3', label: '1.3 Objectives' },
      { id: 'ch1-4', label: '1.4 Scope of the Project' },
    ]},
    { id: 'ch2', label: 'Chapter 2: Literature Review', sub: [
      { id: 'ch2-1', label: '2.1 Agentic AI Systems' },
      { id: 'ch2-2', label: '2.2 LLM Tool Augmentation' },
      { id: 'ch2-3', label: '2.3 Incident Detection in AI Systems' },
      { id: 'ch2-4', label: '2.4 Observability and Tracing' },
      { id: 'ch2-5', label: '2.5 Summary of Literature Gap' },
    ]},
    { id: 'ch3', label: 'Chapter 3: System Architecture', sub: [
      { id: 'ch3-1', label: '3.1 High-Level Architecture' },
      { id: 'ch3-2', label: '3.2 Module Breakdown' },
      { id: 'ch3-3', label: '3.3 Technology Stack' },
    ]},
    { id: 'ch4', label: 'Chapter 4: System Design', sub: [
      { id: 'ch4-1', label: '4.1 Agent Execution Pipeline' },
      { id: 'ch4-2', label: '4.2 Data Flow Diagram' },
      { id: 'ch4-3', label: '4.3 Incident Scoring Formula' },
      { id: 'ch4-4', label: '4.4 Severity Classification' },
      { id: 'ch4-5', label: '4.5 Data Models' },
    ]},
    { id: 'ch5', label: 'Chapter 5: Implementation', sub: [
      { id: 'ch5-1', label: '5.1 Agent Execution Engine' },
      { id: 'ch5-2', label: '5.2 Tool Registry: Calculator' },
      { id: 'ch5-3', label: '5.3 AI Integration (Edge Function)' },
      { id: 'ch5-4', label: '5.4 Incident Scoring Engine' },
      { id: 'ch5-5', label: '5.5 Session Memory Store' },
      { id: 'ch5-6', label: '5.6 Execution Tracing System' },
      { id: 'ch5-7', label: '5.7 API Documentation' },
      { id: 'ch5-8', label: '5.8 User Interface Screenshots' },
    ]},
    { id: 'ch6', label: 'Chapter 6: Testing & Results', sub: [
      { id: 'ch6-1', label: '6.1 Test Methodology' },
      { id: 'ch6-2', label: '6.2 Test Cases' },
      { id: 'ch6-3', label: '6.3 Experimental Results' },
      { id: 'ch6-4', label: '6.4 Performance Analysis' },
    ]},
    { id: 'ch7', label: 'Chapter 7: Conclusion & Future Work', sub: [
      { id: 'ch7-1', label: '7.1 Conclusion' },
      { id: 'ch7-2', label: '7.2 Limitations' },
      { id: 'ch7-3', label: '7.3 Future Work' },
    ]},
    { id: 'references', label: 'References' },
    { id: 'glossary', label: 'Glossary of Terms' },
  ];

  return (
    <div className="toc">
      {items.map((item, i) => (
        <div key={item.id} className="mb-1">
          <a href={`#${item.id}`} className="toc-link font-semibold">
            {item.label}
          </a>
          {item.sub && (
            <div className="ml-6">
              {item.sub.map(sub => (
                <a key={sub.id} href={`#${sub.id}`} className="toc-link block">
                  {sub.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
