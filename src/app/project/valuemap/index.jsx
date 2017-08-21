const typeEnum = {
    1: "厂商",
    2: "经销商",
    3: "客户",
};

const people = [{
    value: 'dev',
    label: '开发部',
    children: [{
        value: 'litcb',
        label: '李天赐',
    }, {
        value: 'guankx',
        label: '关凯旋',
    }],
}, {
    value: 'test',
    label: '测试部',
    children: [{
        value: 'py',
        label: '彭钰',
    }, {
        value: 'hy',
        label: '黄瑶',
    }],
}];

const deptRef = {};
for(let i=0;i<people.length;i++) {
    deptRef[people[i]["value"]] = people[i]["label"];
}

const userRef = {};
for(let i=0;i<people.length;i++) {
    if(people[i]["children"]) {
        let users = people[i]["children"];
        for(let j=0;j<users.length;j++) {
            userRef[users[j]["value"]] = users[j]["label"];
        }
    }
}

export {
    typeEnum,
    people,
    deptRef,
    userRef,
}