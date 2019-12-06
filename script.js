window.onload = () =>
{
    let svg = document.getElementById('svg');
    svg.setAttribute('height', document.documentElement.clientHeight);
    let group = document.getElementById('group');
    let rect = group.getBoundingClientRect();
    let scx = document.documentElement.clientWidth / rect.width;
    scx = Math.min(scx, 1.8);
    let remx = document.documentElement.clientWidth - rect.width * scx;
    remx /= 2;
    remx = Math.max(remx, 0);
    let remy = document.documentElement.clientHeight - rect.height * scx;
    remy /= 2;
    remy = Math.max(remy, 0);
    group.setAttribute('transform', `translate(${remx}, ${remy}) scale(${scx}, ${scx})`);
};
