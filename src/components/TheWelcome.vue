<script setup>
import WelcomeItem from './WelcomeItem.vue'
import Experience from './icons/Experience.vue'
import School from './icons/School.vue'
import Skill from './icons/Skill.vue'
import Link from './icons/Link.vue'
import Leetcode from './icons/Leetcode.vue'
import Github from './icons/Github.vue'
import Facebook from './icons/Facebook.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <Experience />
    </template>
    <template #heading>簡歷</template>
    
    <li>一位熱愛IT技術，但不知為何一直在<s>被學長逼迫</s>做網頁的人。</li>
    <li>與同系學長<s><a href="https://internet.nizw0.com/" target="_blank" rel="noopener"
    >吳丞恩</a></s>有各種不單純且複雜的關係，時常互相情緒勒索對方。</li>
    <li>被畢業專題跟Side project搞到快得憂鬱症的可憐兒。</li>

    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <School />
    </template>
    <template #heading>專案</template>
    <a href="https://github.com/Kotno557/Dobie" target="_blank" rel="noopener noreferrer"><span></span><img style="width:1em;height:1em;vertical-align:-0.15em;border-radius:3px;margin-right:0.3em" src="https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fexternal_integrations%2Fgithub-icon.png?width=200&amp;userId=ba5ec034-139b-4545-9734-91b883c84d1b&amp;cache=v2"><span style="border-bottom:0.05em solid rgba(55, 55, 55, 1);font-weight:500;flex-shrink:0">Dobie</span><img style="width:1em;height:1em;vertical-align:-0.15em;border-radius:3px;margin-left:0.3em" src="https://www.notion.so/image/https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F63412687%3Fv%3D4?width=200&amp;userId=ba5ec034-139b-4545-9734-91b883c84d1b&amp;cache=v2"></a>：基於Clean network的傳輸路徑安全分析與改進之應用程式<br
    ><a href="https://github.com/Kotno557/GShepherd" target="_blank" rel="noopener noreferrer"><span></span><img style="width:1em;height:1em;vertical-align:-0.15em;border-radius:3px;margin-right:0.3em" src="https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fexternal_integrations%2Fgithub-icon.png?width=200&amp;userId=ba5ec034-139b-4545-9734-91b883c84d1b&amp;cache=v2"><span style="border-bottom:0.05em solid rgba(55, 55, 55, 1);font-weight:500;flex-shrink:0">GShepherd</span><img style="width:1em;height:1em;vertical-align:-0.15em;border-radius:3px;margin-left:0.3em" src="https://www.notion.so/image/https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F63412687%3Fv%3D4?width=200&amp;userId=ba5ec034-139b-4545-9734-91b883c84d1b&amp;cache=v2"><span></span></a>：基於多元教育之即時教學互動平台<br
    ><a href="https://github.com/Kotno557/Internet-fall-2022" target="_blank" rel="noopener noreferrer"><span></span><img style="width:1em;height:1em;vertical-align:-0.15em;border-radius:3px;margin-right:0.3em" src="https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fexternal_integrations%2Fgithub-icon.png?width=200&amp;userId=ba5ec034-139b-4545-9734-91b883c84d1b&amp;cache=v2"><span style="border-bottom:0.05em solid rgba(55, 55, 55, 1);font-weight:500;flex-shrink:0">Internet-fall-2022</span><img style="width:1em;height:1em;vertical-align:-0.15em;border-radius:3px;margin-left:0.3em" src="https://www.notion.so/image/https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F63412687%3Fv%3D4?width=200&amp;userId=ba5ec034-139b-4545-9734-91b883c84d1b&amp;cache=v2"><span></span></a>：希望這門課結束時這邊會有很多優秀作品uwu<br
    >
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Skill />
    </template>
    <template #heading>主要技能</template>
    <li>C++：用於程式競賽。</li>
    <li>Python：用於大多數程式開發<s>(除了網頁)</s>。</li>
    <li>JavaSript：用於網頁程式開發<s>(坐等<a href="https://pyscript.net/" target="_blank" rel="noopener">&lt;PyScript&gt;</a>成熟後能有前端框架)</s>。</li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Link />
    </template>
    <template #heading>外部連結</template>
    <li><a href="https://leetcode.com/kotno557/" target="_blank" rel="noopener"><span><Leetcode /></span>Leetcode</a></li>
    <li><a href="https://github.com/Kotno557" target="_blank" rel="noopener"><span><Github /></span>GitHub</a></li>
    <li><a href="https://www.facebook.com/profile.php?id=100011459893120" target="_blank" rel="noopener"><span><Facebook /></span>Facebook</a></li>

  </WelcomeItem>
</template>
