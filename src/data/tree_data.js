var treeData = [
    [ // Alchemist
        {
            skillID: 'formula_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 8
        },
        {
            skillID: 'fire_formula',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'ice_formula',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'volt_formula',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'inferno_formula',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'cocytus_formula',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'thor_formula',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'flame_formula',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'freeze_formula',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'spark_formula',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'dilution',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numAfter: 0,
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'analysis',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'pain_formula',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'firelight',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numAfter: 2,
            numBefore: 1,
        },
        {
            skillID: 'light_formula',
            baseSkill: false,
            coords: {x: 2, y: 8},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'light_tincture',
            baseSkill: false,
            coords: {x: 2, y: 9},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 10},
            barSize: 5
        },
        {
            skillID: 'return_formula',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'flee',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'alchemy',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'scavenge',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'sight_formula',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'focus',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'chop',
            baseSkill: true,
            coords: {x: 0, y: 16},
            numAfter: 0,
            numBefore: 0,
        },
    ],
    [ // Dark Hunter
        {
            skillID: 'whip_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 5
        },
        {
            skillID: 'gag',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'shackles',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'cuffs',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'ecstasy',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numAfter: 0,
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'viper',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 2,
            numBefore: 1,
        },
        {
            skillID: 'climax',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numAfter: 0,
            numBefore: 1,
            skippedCols: 1
        },
        {
            skillID: 'sword_mastery',
            baseSkill: true,
            coords: {x: 0, y: 6},
            barSize: 5
        },
        {
            skillID: 'hypno_bite',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'nerve_bite',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'mirage_bite',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'soul_liberator',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numAfter: 0,
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'drain_bite',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numAfter: 2,
            numBefore: 1,
        },
        {
            skillID: 'catastrophe',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numAfter: 0,
            numBefore: 1,
            skippedCols: 1
        },
        {
            skillID: 'atk_up',
            baseSkill: true,
            coords: {x: 0, y: 12},
            barSize: 2
        },
        {
            skillID: 'boost_up',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'wraths_might',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'bait',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 15},
            barSize: 2
        },
        {
            skillID: 'bind_heart',
            baseSkill: false,
            coords: {x: 0, y: 16},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'shadow_veil',
            baseSkill: false,
            coords: {x: 0, y: 17},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'dark_curse',
            baseSkill: false,
            coords: {x: 1, y: 16},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 18},
            barSize: 0
        },
        {
            skillID: 'take',
            baseSkill: true,
            coords: {x: 1, y: 18},
            barSize: 0
        }
    ],
    [ // Gunner
        {
            skillID: 'gun_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 9
        },
        {
            skillID: 'head_snipe',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'arm_snipe',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'leg_snipe',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'fire_rounds',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'charged_fire',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'ice_rounds',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'charged_ice',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'volt_rounds',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'charged_volt',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'charged_shot',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'penetrator', // GIVE PENETRATOR 2 LINES
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 2,
            numBefore: 1,
        },
        {
            skillID: 'recharge',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numAfter: 0,
            numBefore: 2
        },
        {
            skillID: 'ricochet',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'action_boost',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 10},
            barSize: 2
        },
        {
            skillID: 'medic_bullet',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'cover_fire',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'shell_shock',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'atk_up',
            baseSkill: true,
            coords: {x: 0, y: 13},
            barSize: 2
        },
        {
            skillID: 'high_caliber',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'vulcan_stance',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'double_strike',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'take',
            baseSkill: true,
            coords: {x: 0, y: 16},
            barSize: 0,
            numAfter: 0
        },
    ],
    [ // Hexer
        {
            skillID: 'curse_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 9,
            numBefore: 0,
            numAfter: 0
        },
        {
            skillID: 'sapping_curse',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'frailty_curse',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'leaden_curse',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'deceit_curse',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'revenge_curse',
            baseSkill: false,
            coords: {x: 2, y: 1},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'blinding_curse',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'madness_curse',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 2,
            numBefore: 1,
        },
        {
            skillID: 'torpor_curse',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'corrupt_curse',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'stoning_curse',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'cranial_curse',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'abdomen_curse',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'immobile_curse',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'evil_eye',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 4,
            numBefore: 1,
        },
        {
            skillID: 'luring_whisper',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'muting_word',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'conflict_word',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'suicide_word',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 13},
            numAfter: 1,
            numBefore: 0,
            barSize: 1
        },
        {
            skillID: 'staggering_word',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numAfter: 0,
            numBefore: 0,
        },
        {
            skillID: 'chop',
            baseSkill: false,
            coords: {x: 2, y: 13},
            numBefore: 0,
            numAfter: 0
        },
        
    ],
    [ // Highlander
        {
            skillID: 'spear_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 6
        },
        {
            skillID: 'long_thrust',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'draining_thrust',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'draining_burst',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'legion_thrust',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'legion_burst',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'head_pierce',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'spear_assist',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'delayed_charge',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'cross_charge',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'atk_up',
            baseSkill: true,
            coords: {x: 0, y: 7},
            barSize: 3
        },
        {
            skillID: 'turning_tide',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'bloody_offense',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'bloodlust',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'stigmata',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'def_up',
            baseSkill: true,
            coords: {x: 0, y: 11},
            barSize: 3
        },
        {
            skillID: 'battle_instinct',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'blood_fortune',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'allied_bonds',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numAfter: 0,
            numBefore: 2,
        },
        {
            skillID: 'spirit_shield',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 15},
            barSize: 2
        },
        {
            skillID: 'limitless',
            baseSkill: false,
            coords: {x: 0, y: 16},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'black_sabbath',
            baseSkill: false,
            coords: {x: 0, y: 17},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'mine',
            baseSkill: false,
            coords: {x: 1, y: 15},
            barSize: 0
        },
    ],
    [ // Landsknecht
        {
            skillID: 'sword_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 4,
            numBefore: 0,
            numAfter: 0
        },
        {
            skillID: 'raging_edge',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'tornado',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'blinding_slap',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'falcon_slash',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'axe_mastery',
            baseSkill: true,
            coords: {x: 0, y: 5},
            barSize: 4,
            numBefore: 0,
            numAfter: 0
        },
        {
            skillID: 'boomerang_axe',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'head_bash',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'stunning_smash',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 1,
            numBefore: 1,
        },
        {
            skillID: 'power_crush',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 0,
            numBefore: 1,
        },
        {
            skillID: 'double_strike',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numAfter: 0,
            numBefore: 5, // really only 2 but need to make line longer
            beforeStyle: 'centered',
        },
        {
            skillID: 'ice_chaser',
            baseSkill: false,
            coords: {x: 2, y: 5},
            numAfter: 0,
            numBefore: 7, // really only 2 but need to make line longer
            beforeStyle: 'centered',
        },
        {
            skillID: 'fire_chaser',
            baseSkill: false,
            coords: {x: 2, y: 4},
            numAfter: 0,
            numBefore: 1
        },
        {
            skillID: 'volt_chaser',
            baseSkill: false,
            coords: {x: 2, y: 6},
            numAfter: 0,
            numBefore: 1
        },
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 10},
            numAfter: 1,
            numBefore: 0
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 11},
            numAfter: 1,
            numBefore: 0
        },
        {
            skillID: 'triple_charge',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numAfter: 1,
            numBefore: 2
        },
        {
            skillID: 'atk_up',
            baseSkill: true,
            coords: {x: 0, y: 12},
            numAfter: 1,
            numBefore: 0
        },
        {
            skillID: 'war_cry',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numAfter: 1,
            numBefore: 1
        },
        {
            skillID: 'strike_chaser',
            baseSkill: false,
            coords: {x: 2, y: 11},
            numAfter: 0,
            numBefore: 3,
            beforeStyle: 'centered'
        },
        {
            skillID: 'mine',
            baseSkill: true,
            coords: {x: 0, y: 13},
            barSize: 0,
            numAfter: 1,
            numBefore: 0
        },
    ],
    [ // Medic

    ]
]

export default treeData;