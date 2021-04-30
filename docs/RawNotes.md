# Raw Notes

This is a catch all for all of the notes before we finish building and organizing the system.

What if we built a system more based on customization and choice?

What grants a player choice?
- Multi-classing
- Feats
- Skill Variance
  - Different abilities for different spells and skills
- Giving different vocations different abilities
  - Knights shouldn't have all breaks

How do we achieve multi-classing?
- Classes & Jobs
- Take X levels in class 1 & Y levels in class 2 and unlock Job
- Jobs grant abilities based on how much of the underlying classes you have leveled
- Jobs allow you to use abilities up to a certain point in your classes
- You can have one Class or Job "active" at a time
- You can have one Support ability from any class or job you have leveled
- You can have one Reaction ability from any class or job you have leveled

- [ ] Combat System
  - Lower Damage Formulas

Magic
- Design Level 3/4 of skills first, push silliness, make lower levels lesser effects
- Magic Die is simply d10, more or less MP
- Spells Cost half a Magic Die per Spell Level (6 right now)
- Given Fire deals 1x Damage, Fire II will deal 2x damage and cost 3x what Fire I costs
- AoE for Spells will be limited to certain levels of spells
  - Do we want to limit to only pure casters can alter spell AoE?
  - I.E. Dark Knight casting Darkness or Fire cannot make it AoE
  - Aero III or IV cannot be cast single target or it loses potency casting in a smaller AoE
  - Fire IV AoE is so large that it will hit the caster unless they cast it at max range
- Spells need a charge time
- Black Magic -> Fire, Ice, Thunder, Darkness
- White Magic -> Air, Earth, Water, Holy
- Time Magic -> Arcane, Time, Space
- Different effects to Elemental Magic(?)
  - Thunder -> Stun
  - Blizzard -> Slow
  - Fire -> Bigger AoE
  - Aero -> Bonus Dmg to Enemies with Float or who are flying
  - Reflect should be instant cast (at least for Time Mage)
  - White Magic does the same damage as Black Magic

Skills
- Have meaningful choices
- Built in cost boost
- Simple to understand
- Integrate Stats (?)
- Simplify Language
  - Grant X languages to each PC
  - Advantage + Langauge
  - Disadvantage - Language
  - Use X skill points to gain a new Language
- Knowledge Base
  - Provide Base Set of Knowledge skills and template for creating skill set
  - Use Background/Origin for modifiers
- Skill Ranks (?)
  - Novice
  - Journeyman
  - Expert
  - Master
  - Legendary

## Statuses

### Fatal

Condemned
Death
Eject
Frozen
Gravity
Heat
Near-Fatal

### Mystify

Berserk
Charm
Confuse
Unaware

### Toxin

Poison
Venom
Seal
Blind
Curse
Petrify
Silence
Sleep
Stone

### Time

Disable
Immobilize
Sap
Slow
Stop

### Transform

Mini
Toad
Zombie

### Weaken

_ Break
_ Down
Elemental Weak
Lock
Meltdown

### Barrier

Elemental Absorb
Elemental Immune
Elemental Resist
Elemental Spikes
Protect
Reflect
Resist
Shell
Shield
Status Immune
Wall

### Strengthen

Accelerate
_ Up
Aura
Blink
Flight
Float
Haste
MP Half
MP Quater
Re-Raise
Ruse
Vanish

- [ ] Updated website to be easier to read
  - Make a modern version of the website
- [ ] Updated language to make things clearer when playing
  - Update terminology used with `Learned` skills, as this trips up players
- [ ] Attribute/Stat Rework
  - Dexterity & Mind are bad, just Accuracy & M.Acc - 50
  - M.Acc Formula: `MAG * 2 + Job Acc + Wpn Skill`
  - M.Eva Formula: `AGI + SPR`
- [ ] Skill Rework
  - Do we bother?
  - How to lessen the points to distribute
    - Currently, players are given 400+ skill points to distribute
    - Limit skill points by 1/5
    - Skill Cap is 10 + 1/4 Level
    - Skill Rating = Skill Points * 5
  - Languages work like D&D
    - Everyone speaks Common
    - Racial/Background Languages +1 each
    - Humes get +1 of choice
    - Learn a language at GM discression for some cost
    - Create list of Lore Skills
      - Basic & Specific Lore
      - Specific Lore tied to Basic
      - Specific cap at Basic Value
- [ ] Job Reworks
  - Only update jobs players want to use (Black Mage, Dark Knight, Engineer, Monk, White Caller)
  - Give each job a reaction
  - Give each job a support ability
    - Inate Magic Atk Up for Black Mages
    - Inate Teleport for Time Mages
    - Inate Ignore Height for Dragoons
  - Make sure jobes get more skills as they level (e.g. Monk gets 11~ abilities where Black Mage gets 34)
  - Abilities & Actions shouldn't auto hit, and in fact need detriments to basic attacks
- [ ] Magic Update
  - Add Revivify (2, WHT, 25 MP, Res @ 10%, use once per scene)
  - Raise (40 MP, Res @ 25%)
  - Add "Magic Blind"
- [ ] Move System
  - Make Mov 4, Jump 2 the default (I think that's the only change needed)
- [ ] Monster System Update
  - Arm Formula: `Armor Base * VIT * 1.5`
  - M.Arm Formula: `MArmor Base * SPR * 1.5`

