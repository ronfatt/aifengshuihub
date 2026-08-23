"use client";

import { useState } from "react";
import { Compass, Sparkles, Sun, Flame, Shield, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { openExternalLink } from "@/lib/externalLink";

interface ZodiacEnergy {
  name: string;
  element: string;
  score: number;
  fortuneKeyword: string;
  luckyColor: string;
  luckyDirection: string;
  advice: string;
}

const zodiacData: Record<string, ZodiacEnergy> = {
  鼠: { name: "生肖鼠", element: "子水", score: 92, fortuneKeyword: "贵人相助 · 财气盈门", luckyColor: "天青色 / 银白色", luckyDirection: "正北、东南", advice: "今日思路清晰敏捷，宜推进搁置的项目或与合伙人洽谈。" },
  牛: { name: "生肖牛", element: "丑土", score: 85, fortuneKeyword: "稳中求进 · 顺其自然", luckyColor: "暖黄色 / 棕褐色", luckyDirection: "东北、正西", advice: "踏实推进日常事务，避免冲动做重大资金决策，守成为上。" },
  虎: { name: "生肖虎", element: "寅木", score: 88, fortuneKeyword: "气势如虹 · 破局开新", luckyColor: "碧绿色 / 翠蓝", luckyDirection: "正东、西北", advice: "适合主动出击争取机会，但言语间宜多保留谦逊与弹性。" },
  兔: { name: "生肖兔", element: "卯木", score: 90, fortuneKeyword: "灵感泉涌 · 和气生财", luckyColor: "薄荷绿 / 浅粉", luckyDirection: "正东、西南", advice: "人际交往融洽，适合修复沟通障碍或与朋友聚会交流。" },
  龙: { name: "生肖龙", element: "辰土", score: 94, fortuneKeyword: "龙腾四海 · 声名显赫", luckyColor: "曜石黑 / 金黄色", luckyDirection: "东南、正北", advice: "能量处于高位，今日有重要灵感或好消息降临，保持专注。" },
  蛇: { name: "生肖蛇", element: "巳火", score: 86, fortuneKeyword: "洞察秋毫 · 静水流深", luckyColor: "朱砂红 / 紫罗兰", luckyDirection: "正南、东北", advice: "直觉敏锐，适合独立思考与复盘规划，少参与非必要纷争。" },
  马: { name: "生肖马", element: "午火", score: 89, fortuneKeyword: "动力充沛 · 步步为赢", luckyColor: "亮橙色 / 赤红", luckyDirection: "正南、西南", advice: "执行力极强的一天，适合处理繁琐事务，效率事半功倍。" },
  羊: { name: "生肖羊", element: "未土", score: 87, fortuneKeyword: "温润有礼 · 渐入佳境", luckyColor: "米白色 / 浅卡其", luckyDirection: "西南、正东", advice: "保持平常心，多关注身心舒适与居家环境整理，能量自然汇聚。" },
  猴: { name: "生肖猴", element: "申金", score: 91, fortuneKeyword: "灵动多智 · 机遇降临", luckyColor: "金黄色 / 纯白", luckyDirection: "正西、东南", advice: "可能收到意料之外的好讯息，随机应变能带来额外收获。" },
  鸡: { name: "生肖鸡", element: "酉金", score: 88, fortuneKeyword: "条理分明 · 掷地有声", luckyColor: "珍珠白 / 琥珀黄", luckyDirection: "正西、东北", advice: "适合做财务预算、合同校对或文案整理，严谨带来好运。" },
  狗: { name: "生肖狗", element: "戌土", score: 84, fortuneKeyword: "忠诚笃定 · 蓄力以待", luckyColor: "土黄色 / 咖啡色", luckyDirection: "西北、正南", advice: "今天宜多倾听少表态，默默积累专业能力，时机即将成熟。" },
  猪: { name: "生肖猪", element: "亥水", score: 93, fortuneKeyword: "福星高照 · 随遇而安", luckyColor: "深海蓝 / 银灰", luckyDirection: "西北、正东", advice: "心情愉悦气场柔和，适合开展合作或享用美食，贵人运旺。" },
};

const zodiacList = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];

export function DailyEnergyWidget() {
  const [selectedZodiac, setSelectedZodiac] = useState("龙");
  const currentEnergy = zodiacData[selectedZodiac] ?? zodiacData["龙"];

  const handleSelectZodiac = (zodiac: string) => {
    setSelectedZodiac(zodiac);
    trackEvent("daily_widget_zodiac_click", { zodiac });
  };

  const handleGoNameTool = () => {
    trackEvent("daily_widget_funnel_click", {
      target: "name-number",
      url: "https://ai-name-rust.vercel.app/",
    });
    openExternalLink("https://ai-name-rust.vercel.app/");
  };

  return (
    <section className="daily-widget-section" aria-labelledby="daily-widget-title">
      <div className="daily-widget-card">
        <div className="daily-widget__header">
          <div className="section-badge">
            <Sun size={14} />
            <span>DAILY ENERGY · 每日能量</span>
          </div>
          <h2 id="daily-widget-title">今日干支能量与生肖开运指南</h2>
          <p>免跳转直接体验 · 点击您的属相获取今日开运灵感</p>
        </div>

        {/* Zodiac Selector */}
        <div className="zodiac-picker" role="radiogroup" aria-label="选择您的生肖属相">
          {zodiacList.map((zodiac) => {
            const isSelected = selectedZodiac === zodiac;
            return (
              <button
                key={zodiac}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`zodiac-btn ${isSelected ? "is-active" : ""}`}
                onClick={() => handleSelectZodiac(zodiac)}
              >
                <span className="zodiac-btn__char">{zodiac}</span>
                <span className="zodiac-btn__sub">{zodiacData[zodiac].element.slice(0, 1)}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Zodiac Result Card */}
        <div className="daily-energy-panel">
          <div className="energy-panel__header">
            <div>
              <span className="energy-panel__tag">{currentEnergy.name} · {currentEnergy.element}</span>
              <h3 className="energy-panel__keyword">{currentEnergy.fortuneKeyword}</h3>
            </div>
            <div className="energy-panel__score-box">
              <span className="score-num">{currentEnergy.score}</span>
              <span className="score-label">今日能量指数</span>
            </div>
          </div>

          <div className="energy-panel__details">
            <div className="detail-item">
              <span className="detail-label">🎨 今日开运色</span>
              <span className="detail-val">{currentEnergy.luckyColor}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🧭 喜神与财神方</span>
              <span className="detail-val">{currentEnergy.luckyDirection}</span>
            </div>
            <div className="detail-item detail-item--full">
              <span className="detail-label">💡 行事避坑与开运锦囊</span>
              <span className="detail-val">{currentEnergy.advice}</span>
            </div>
          </div>

          <div className="energy-panel__funnel-banner">
            <div className="funnel-text">
              <strong>想进一步探索您的名字磁场与财运契机？</strong>
              <span>旗下《紫微易名》支持 30 秒免注册测算名、情、财运势</span>
            </div>
            <button
              type="button"
              className="funnel-action-btn"
              onClick={handleGoNameTool}
            >
              <span>30 秒免费测算名字</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
