var treeData = [
    [
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
        ,
        {
            skillID: 'chop',
            baseSkill: true,
            coords: {x: 0, y: 16},
            numAfter: 0,
            numBefore: 1,
        },
    ],
    [
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
        }
    ]
]

export default treeData;