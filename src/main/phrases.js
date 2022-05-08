function teleportCooldown(level) {
  return 420 - (210 / 17) * level
}

function getSkillCooldown(skill) {
  console.log('getting cooldown of ', skill)
}

const roles = ['top', 'jungle', 'mid', 'bot', 'sup']

const timers = [
  { phrase: 'flash', synonyms: ['flash'], cooldown: 300, active: false },
  {
    phrase: 'teleport',
    synonyms: ['tele', 'teleport'],
    cooldown: teleportCooldown,
    active: false,
  },
  { phrase: 'heal', synonyms: ['heal'], cooldown: 240, active: false },
  { phrase: 'cleanse', synonyms: ['cleanse'], cooldown: 210, active: false },
  { phrase: 'exhaust', synonyms: ['exhaust'], cooldown: 210, active: false },
  { phrase: 'ghost', synonyms: ['ghost'], cooldown: 210, active: false },
  { phrase: 'barrier', synonyms: ['barrier'], cooldown: 180, active: false },
  { phrase: 'ignite', synonyms: ['ignite'], cooldown: 180, active: false },
  { phrase: 'smite', synonyms: ['smite'], cooldown: 90, active: false },
  { phrase: 'q', synonyms: ['q'], cooldown: getSkillCooldown, active: false },
  { phrase: 'w', synonyms: ['w'], cooldown: getSkillCooldown, active: false },
  { phrase: 'e', synonyms: ['e'], cooldown: getSkillCooldown, active: false },
  {
    phrase: 'r',
    synonyms: ['ult', 'ultimate', 'r'],
    cooldown: getSkillCooldown,
    active: false,
  },
]

const phrases = roles.map(role => ({ role, timers })).flat()

module.exports = { phrases }
