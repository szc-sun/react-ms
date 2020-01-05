/*
 * action 类型
 */

export const type = {
    SWITCH_MENU : 'SWITCH_MENU',
    TEST:'TEST'
}

// 菜单点击切换，修改面包屑名称
export function switchMenu(menuName) {
    return {
        type:type.SWITCH_MENU,
        payload:{menuName}
    }
}

// TEST
export function TEST(menuName) {
    return {
        type:type.TEST,
        payload:{menuName}
    }
}