/**
 * 785. 判断二分图
 * 给定一个无向图graph，当这个图为二分图时返回true。
 * 如果我们能将一个图的节点集合分割成两个独立的子集A和B
 * ，并使图中的每一条边的两个节点一个来自A集合，一个来自B集合，我们就将这个图称为二分图。
 * graph将会以邻接表方式给出，graph[i]表示图中与节点i相连的所有节点。
 * 每个节点都是一个在0到graph.length-1之间的整数。
 * 这图中没有自环和平行边： graph[i] 中不存在i，
 * 并且graph[i]中没有重复的值。
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    const visited = new Array(graph.length);
    for (let i = 0; i < graph.length; i++) {
        // 已经染色的跳过
        if(visited[i]) continue;
        // 队列初始化推入定点i;
        const queue = [i];
        // 染为蓝色
        visited[i] = 1;
        // 遍历顶点i所有相邻的顶点
        while (queue.length) {
            // 考察出列顶点
            const cur = queue.shift();
            // 出列顶点的颜色
            const curColor  = visited[cur];
            // 它相邻顶点应该有的颜色
            const neighborColor = -curColor;
            // 给他们都上色
            for (let index = 0; index < graph[cur].length; index++) {
                const neighor = graph[cur][index];

                // 还没上色
                if (visited[neighor] == undefined) {
                    // 进行上色
                    visited[neighor] = neighborColor;
                    // 推入队列
                    queue.push(neighor);
                    // 染了但是不对的颜色
                }else if (visited[neighor] != neighborColor){
                    return false;
                }
                
            }
        }
        
    }
    return true;
};


const DFS = function(x,y){

    var goal_x = 10, goal_y = 10;

    // 地图的宽高
    var n = 10, m = 10;
    // 图
    var graph = new Array(n)
    // 用来标记地图上那些点是走过的
    var used = new Array(n);
    
    // 通过px和py数组来实现左下右上的移动顺序
    var px = [-1,0,1,0];
    var py = [-1,0,1,0];
    
    var flag = 0;
    
    if (graph[x][y] == graph[goal_x][goal_y]) {
        console.log("successful");
        flag = 1;
        return;
    }
    
    for(let i = 0; i != 4;  i++){
        var new_x = x+px[i] ,new_y = y +py[i];
        if (new_x >= 0 && used[new_x][new_y] == 0 && !flag) {
            // 该格子设为走过
            used[new_x][new_y] = 1;
            // 递归下去
            DFS(new_x, new_y);
            user[new_x][new_y] = 0;//状态回溯，退回来，将格子设置为未走过
        }
    }
    
}