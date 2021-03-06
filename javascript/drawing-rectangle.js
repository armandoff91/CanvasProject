/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 ***********************************************/

class DrawingRectangle extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }

  onMouseDown(coord, event) {
    this.contextReal.strokeStyle = currentDrawColor;
    this.contextReal.lineWidth = currentBrushSize;
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging(coord, event) {
    this.contextDraft.strokeStyle = currentDrawColor;
    this.contextDraft.lineWidth = currentBrushSize;
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    this.contextDraft.strokeRect(
      this.origX,
      this.origY,
      coord[0] - this.origX,
      coord[1] - this.origY
    );
  }

  onMouseMove() {}
  onMouseUp(coord) {
    this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    
    drawStrokeRect(coord[0], coord[1], this.origX, this.origY, "stroke", this.contextReal.strokeStyle, this.contextReal.lineWidth, "black", this.contextReal);
    
  }
  onMouseLeave() {}
  onMouseEnter() {}
}
