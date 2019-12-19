// @ts-check

const Obj = {
    x: 1,
    
    f1: () => 2,
    f2: (y = Obj.f1()) => {}
};