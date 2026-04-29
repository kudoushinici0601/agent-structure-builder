import React from "react";
import { createRoot } from "react-dom/client";
import { Bot, Workflow, FileText, Database, ShieldCheck, BarChart3 } from "lucide-react";
import "./style.css";

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">AI Agent Project · 2026</div>
        <h1>Agent Structure Builder</h1>
        <p>
          基于多 Agent 协作的业务结构建设系统，用于需求拆解、流程规划、SOP 生成、
          知识库沉淀、内容生产与审核校验。
        </p>
        <div className="actions">
          <a href="#modules">查看系统模块</a>
          <a href="#result" className="secondary">项目成果</a>
        </div>
      </section>

      <section className="stats" id="result">
        <div>
          <span>总 Token 消耗</span>
          <strong>81,652,873</strong>
        </div>
        <div>
          <span>输入 Token</span>
          <strong>50,368,274</strong>
        </div>
        <div>
          <span>输出 Token</span>
          <strong>31,284,599</strong>
        </div>
        <div>
          <span>总请求数</span>
          <strong>36,842</strong>
        </div>
      </section>

      <section className="content">
        <h2>项目概述</h2>
        <p>
          本项目在 2026 年 3 月 1 日至 2026 年 4 月 20 日期间完成核心结构建设。
          系统通过多个智能 Agent 分工协作，将原始业务信息转化为标准化的结构文档、
          执行流程和可复用知识库，适用于运营管理、客服体系搭建、项目规划和内部流程优化等场景。
        </p>
      </section>

      <section className="modules" id="modules">
        <h2>核心 Agent 模块</h2>
        <div className="grid">
          <Card icon={<Bot />} title="需求拆解 Agent" text="将原始业务需求拆解为目标、流程、岗位、风险和执行动作。" />
          <Card icon={<Workflow />} title="结构规划 Agent" text="搭建一级、二级、三级业务结构，形成完整业务结构树。" />
          <Card icon={<FileText />} title="SOP 生成 Agent" text="自动生成接单、客服、人员管理、投诉处理和复盘流程。" />
          <Card icon={<BarChart3 />} title="内容生产 Agent" text="批量生成运营文案、客服话术、培训内容和短视频脚本。" />
          <Card icon={<ShieldCheck />} title="审核校验 Agent" text="检查逻辑重复、表达不清、风控遗漏和流程断层问题。" />
          <Card icon={<Database />} title="知识库沉淀 Agent" text="将最终确认内容归档为标准知识库，方便后续团队调用。" />
        </div>
      </section>

      <section className="content">
        <h2>最终成果</h2>
        <ul>
          <li>搭建 1 套完整业务结构图</li>
          <li>梳理 6 大业务模块</li>
          <li>拆分 23 个核心流程节点</li>
          <li>制定 48 条标准执行规则</li>
          <li>生成 12 份内部 SOP 文档</li>
          <li>沉淀 100+ 条客服标准话术</li>
          <li>产出 300+ 条运营文案素材</li>
          <li>完成 50+ 条短视频脚本框架</li>
        </ul>
      </section>
    </main>
  );
}

function Card({ icon, title, text }) {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
